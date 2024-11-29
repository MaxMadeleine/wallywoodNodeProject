import { supabase } from "../config/configSupabase.js";

export class CartlinesModel {
    async getAllRecords() {
        try {
            const { data, error } = await supabase.from("cartlines").select("*");
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
                .from("cartlines")
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
                .from("cartlines")
                .insert([{
                    user_id: formData.user_id,
                    poster_id: formData.poster_id,
                    quantity: formData.quantity
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
                .from("cartlines")
                .update({
                    quantity: formData.quantity,
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

    async deleteRecord(id) {
        try {
            const { data, error } = await supabase
                .from("cartlines")
                .delete()
                .eq("id", id);
            if (error) {
                throw new Error(error.message);
            }
            return { message: "Cart line deleted successfully" };
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }
}

export const cartlinesModel = new CartlinesModel(); 