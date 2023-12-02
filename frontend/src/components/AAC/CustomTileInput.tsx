import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface FormProps {
    onSubmit: (data: FormData) => void;
  }
  
  interface FormData {
    image: string;
    sound?: string;
    text: string;
    tileColor: string;
  }


  export default function CustomTileInputForm({ onSubmit }: FormProps) {
    const [formData, setFormData] = React.useState<FormData>({ text: '',  image: '', sound: '', tileColor: ''});


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

      const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
          ...formData,
          tileColor: e.target.value,
        });
      };
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      onSubmit(formData);
    }

   

    return (
       <form>
            <h1>Customize Tiles</h1>
            <label>
                Upload Tile Image:
                <input type="image" name="image" value={formData.image} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Enter Tile Name:
                <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Enter Tile Prounication: 
                <input type="text" name="sound" value={formData.sound} onChange={handleInputChange} />
            </label>
            <br/>
        
            <label>Enter Tile Color:
            <select value={formData.tileColor} onChange={handleSelectChange} >
                <option value="red">red</option>
                <option value="purple">purple</option>
                <option value="orange">orange</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>

       </form>
    );
}