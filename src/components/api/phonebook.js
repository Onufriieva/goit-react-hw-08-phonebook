import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "http://63599a87ff3d7bddb9a5fd19.mockapi.io/api/contacts",
   });

export const getContacts = async() => {
    const {data} = await instanceContacts.get("/");
    return data;
};

export const addContacts = async(name, number) => {
    const newContact = { name, phone: number };
    const {data} = await instanceContacts.post("/", newContact);
    return data;
};


export const removeContacts = async(id) => {
    const {data} = await instanceContacts.delete(`/${id}`);
    return data;
};