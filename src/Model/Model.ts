 export interface tabsData {
    name: string;
    id:number
}

export type tabProduct = {
    Product_name: string;
    Product_Id: string;
    Product_Image: string;
    rating: number;
    price: number;
    category:string
}

export type latestProduct = {
    Product_Image : string;
    Product_Title : string;
    Product_Description : string;
    Shop_Image : string;
    Shop_Name: string;
    Product_Date:string
}

export type doctor = {
    ID: string;
    DocName: string;
    image: string;
    DocType: string;
    service: string[];
    age: number;
    startAvail: number;
    endAvail: number;
    degree: string[];
    gender: string;
    visit:number;
    aboutMe:string;
    specialties:string[];
    Email:string;
    Phone:string;
    Address:string
}

export  type Medicine = {
    ID: number;
    Medname: string;
    Image: string;
    Price: number;
    Category: string;
    Company: string;
    Description: string;
  }
  
 export interface Blog {
    ID: number;
    BlogName: string;
    BlogWriting: string[];
    BlogPic: string;
    BlogTime: string; // Assuming this is a string representation of a date
    BlogWriterName: string;
    BlogWriterImage: string;
  }
  