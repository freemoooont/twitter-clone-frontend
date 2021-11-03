import axios from 'axios';

interface UploadImageReturnProps {
  height: number;
  size: number;
  url: string;
  width: number;
}

export const uploadImage = async (image: File): Promise<UploadImageReturnProps> => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
