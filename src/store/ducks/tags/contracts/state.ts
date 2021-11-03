import { LoadingStatus } from "../../../types";

export interface Tag {
  _id: string;
  name: string;
  count: number;
}

export interface TagsState {
  items: Tag[];
  LoadingStatus: LoadingStatus;
}
