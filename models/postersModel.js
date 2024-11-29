import { supabase } from "../config/configSupabase.js";

export class PostersModel {
    async getAllRecords() {
        try {
            const { data, error } = await supabase.from("posters").select("*");
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }

    async getRecordById(id) {
        try {
            const { data, error } = await supabase
                .from("posters")
                .select("*")
                .eq("id", id)
                .single();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }

    async createRecord(formData) {
        try {
            const { data, error } = await supabase
                .from("posters")
                .insert([{
                    name: formData.name,
                    price: formData.price,
                }])
                .select();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }

    async updateRecord(formData) {
        try {
            const { data, error } = await supabase
                .from("posters")
                .update({
                    name: formData.name,
                    price: formData.price,
                })
                .eq("id", formData.id)
                .select();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }

    async deleteRecord(formData) {
        try {
            const { data, error } = await supabase
                .from("posters")
                .delete()
                .select("*")
                .eq("id", formData.id);
            if (error) {
                throw new Error(error.message);
            }
            return { message: "Poster deleted successfully" };
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }
}

export const postersModel = new PostersModel();

