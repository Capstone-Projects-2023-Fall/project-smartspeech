import React from 'react'
import CustomTileInput from './CustomTileInput';
import { UserData } from './CustomTileInput';

export default function CustomTile() {
  function handleSubmit(formData: UserData) {
    console.log(formData);
  }

  return (
    <div>
      <CustomTileInput onSubmit={handleSubmit} />
    </div>
  );
};