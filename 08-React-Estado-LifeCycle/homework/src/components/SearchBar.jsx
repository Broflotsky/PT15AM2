import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
