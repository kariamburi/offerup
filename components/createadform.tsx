"use client";
import Alert from "@mui/material/Alert";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { categories } from "@/lib/categories";
import { packages } from "@/lib/packages";
import { locations } from "@/lib/location";
import Autocomplete from "@mui/material/Autocomplete";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { MutableRefObject, useRef, useState } from "react";
import { formValidate } from "@/lib/validations";
import { FormData } from "@/lib/types";

import { useSession } from "next-auth/react";
import { createAd } from "@/lib/uploadData";

const initialState = {
  category: "electronics",
  location: "",
  constituency: "",
  youtube: "",
  title: "",
  description: "",
  price: 0,
  contactNumber: null,
  negotiable: true,
  images: [],
  imgno: 0,
  pack: "",
};

export default function Createadform() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const session: any = useSession<any | null | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const filePickerRef: MutableRefObject<any | null> = useRef<any | null>(null);

  const selectImg = () => {};

  const handleFileChange = (e: { target: { files: any } }) => {
    const files = e.target.files;

    if (files.length > 10) {
      setError("Please upload maximum of 10 files");
      return;
    }
    let updatedGallary = [];
    for (let i = 0; i < files.length; i++) {
      const newImage = files[i];
      newImage["id"] = Math.random();
      if (
        !files[i].name.match(/\.(jpg|jpeg|png|gif|webp)$/) ||
        files[i].size > 5000000
      ) {
        setError("Image File not Supported, Please ReUpload");
      } else {
        setError(null);
        updatedGallary.push(newImage);
      }
    }
    setFormData({ ...formData, images: updatedGallary, imgno: files.length });
  };

  const submitData = async () => {
    // clear error field
    setError(null);
    setSuccess(null);
    const userEmail = session.data.user.email;
    const userName = session.data.user.name;
    const views = 0;
    const postDate: Date = new Date();
    const postedDate: string = postDate.toString();
    // Validations
    const validationResult: {
      error: boolean;
      message: string;
    } = formValidate({ ...formData });

    if (validationResult.error) {
      setError(validationResult.message);
      return;
    }
    // Start loading spinner

    setLoading(true);
    //Submittion
    const submittionResult = await createAd({
      ...formData,
      userEmail,
      userName,
      postedDate,
      views,
    });

    if (submittionResult.error) {
      setError(submittionResult.message);
      return;
    }

    setLoading(false);
    setSuccess("Ad successfully created");
    setFormData(initialState);
  };

  // Handle location change
  const handleLocationChange = (event: { target: { value: any } }) => {
    const locationName = event.target.value;
    const location = locations.find((loc) => loc.name === locationName);
    if (location) {
      setFormData({
        ...formData,
        location: locationName,
        constituency: "", // Clear constituency when location changes
      });
    }
  };

  // Handle constituency change
  const handleConstituencyChange = (event: { target: { value: any } }) => {
    setFormData({
      ...formData,
      constituency: event.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <div className=" w-[90%] md:w-[57%] lg:w-[60%] mx-auto">
        <div className="p-3 bg-white mx-auto text-center relative rounded-md">
          Post ad
          <span
            className="absolute right-3 text-green-600 text-sm hover:cursor-pointer"
            onClick={() => setFormData(initialState)}
          >
            Clear
          </span>
        </div>

        <div className="mt-5 p-3 py-7 bg-white mx-auto text-center relative rounded-md space-y-5">
          {/* Start of Form */}

          <TextField
            id="outlined-select-currency"
            select
            label="Category*"
            value={formData.category}
            sx={{ width: "350px" }}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Location Autocomplete */}
          <Autocomplete
            id="location-autocomplete"
            options={locations}
            getOptionLabel={(option) => option.name}
            value={
              locations.find((loc) => loc.name === formData.location) || null
            }
            onChange={(event, newValue) => {
              setFormData({
                ...formData,
                location: newValue ? newValue.name : "",
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Location*"
                sx={{ width: "350px", marginTop: "15px" }}
              />
            )}
          />

          {/* Constituency Autocomplete */}
          {formData.location && (
            <Autocomplete
              id="constituency-autocomplete"
              options={
                locations.find((loc) => loc.name === formData.location)
                  ?.constituencies || []
              }
              value={formData.constituency}
              onChange={(event, newValue) => {
                setFormData({ ...formData, constituency: newValue });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Area*"
                  sx={{ width: "350px", marginTop: "15px" }}
                />
              )}
            />
          )}

          {/* Image */}
          <div className="text-left text-sm w-[350px] mx-auto">
            <div className="font-semibold">Add Photo</div>
            <div>
              <small className="text-[#464b4f]">
                Add at least 2 photos for this category
              </small>
              <br />
              <small className="text-[#464b4f]">
                First picture - is the title picture.
              </small>
            </div>
            <span
              className="py-2 flex space-x-3"
              onClick={() => {
                filePickerRef.current?.click();
              }}
            >
              <input
                type="file"
                hidden
                multiple
                ref={filePickerRef}
                onChange={handleFileChange}
              />
              <AddBoxIcon className="my-auto hover:cursor-pointer" />

              {formData?.images.map((image: any, index: number) => (
                <span key={index}>
                  <img
                    src={URL.createObjectURL(image)}
                    className="w-12 h-12"
                    alt="AdImage"
                  />
                </span>
              ))}
            </span>
            <br />
            <small className="text-[#464b4f]">
              Supported formats are .jpg, .gif and .png, 5MB max
            </small>
          </div>

          {/* Image */}

          <TextField
            id="outlined-password-input"
            label="Link to Youtube Video"
            type="text"
            value={formData.youtube}
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, youtube: e.target.value })
            }
          />
          <TextField
            id="outlined-password-input"
            label="Title"
            type="text"
            value={formData.title}
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <TextField
            id="outlined-password-input"
            label="Description"
            value={formData.description}
            type="text"
            autoComplete="current-password"
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Ksh</InputAdornment>
              }
              label="Price"
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.negotiable}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      negotiable: !formData.negotiable,
                    })
                  }
                />
              }
              label="Negotiable"
            />
          </FormControl>

          <br />
          <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Contact Number
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Tel</InputAdornment>
              }
              label="Contact Number"
              type="number"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  contactNumber: Number(e.target.value),
                })
              }
            />
          </FormControl>

          {/* Start of Package */}
          <br />
          <TextField
            id="outlined-select-package"
            select
            label="Package*"
            value={formData.pack}
            sx={{ width: "350px" }}
            onChange={(e) => setFormData({ ...formData, pack: e.target.value })}
          >
            {packages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label} {"("}
                {option.desc}
                {"-Ksh "}
                {option.amount}
                {")"}
              </MenuItem>
            ))}
          </TextField>

          <div className="text-left w-[350px] mx-auto">
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
          </div>

          <button onClick={submitData} className="btn w-[350px] btn-accent">
            <span
              className={`${loading ? "loading loading-spinner" : ""}`}
            ></span>
            Create Ad
          </button>
        </div>
      </div>
    </div>
  );
}
