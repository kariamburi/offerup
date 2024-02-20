export type FormData = {
  category: string;
  location: string;
  constituency: string | null;
  youtube: string;
  title: string;
  description: string;
  price: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<string>;
  pack: string;
  imgno: number;
};

export type uploadData = {
  category: string;
  location: string;
  constituency: string | null;
  youtube: string;
  title: string;
  userEmail: string;
  userName: string;
  description: string;
  price: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<any>;
  imgno: number;
  postedDate: string;
  pack: string;
  views: number;
};

export type adData = {
  title: string;
  negotiable: boolean;
  category: string;
  location: string;
  constituency: string | null;
  youtube: string;
  description: string;
  userEmail: string;
  userName: string;
  price: number;
  imagesUrl: Array<string>;
  imgno: number;
  id: string;
  contactNumber: number | null;
  pack: string;
  postedDate: string;
  views: number;
};
// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};
