import { supabase } from "../config/configSupabase.js";

export class UserProfilesModel {
    async getAllRecords() {
        try {
            const { data, error } = await supabase.from("user_profiles").select("*");
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
                .from("user_profiles")
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
                .from("user_profiles")
                .insert([{
                    user_id: formData.user_id,
                    full_name: formData.full_name,
                    address: formData.address,
                    phone: formData.phone
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
                .from("user_profiles")
                .update({
                    full_name: formData.full_name,
                    address: formData.address,
                    phone: formData.phone
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
                .from("user_profiles")
                .delete()
                .eq("id", id);
            if (error) {
                throw new Error(error.message);
            }
            return { message: "User profile deleted successfully" };
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }
}

export const userProfilesModel = new UserProfilesModel(); 