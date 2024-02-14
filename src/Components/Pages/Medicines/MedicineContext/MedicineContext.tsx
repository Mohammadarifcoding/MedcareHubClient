import { createContext, useContext, useState } from 'react';

const MedicineContext = createContext(null);

export const useMedicineContext = () => {
  return useContext(MedicineContext); 
};

export const MedicineProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <MedicineContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </MedicineContext.Provider>
  );
};