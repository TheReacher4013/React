import axios from "axios";

const authtoken = localStorage.getItem("authtoken");
const baseUrl = "http://localhost:3000"

const httpOptions = {
    headers: {
        'Authorization': `Bearer ${authtoken}`
    }

}

const signup = async (name, email, password) => {
    try {
        const response = await axios.post(baseUrl + "/user/register", { name, email, password });
        return response.data.message;
    } catch (error) {
        console.log('error');

    }
}

const signin = async (email, password) => {
    try {
        const response = await axios.post(baseUrl + "/user/signin", { email, password });
        return response.data;
    } catch (error) {
        console.log('error');
    }
}

const getAllTodos = async () => {
    try {
        // const authtoken = localStorage.getItem("authtoken");
        const response = await axios.get(baseUrl + "/todo/all-todos", httpOptions);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error');
    }
}

const addTodo = async (title, description) => {
    try {
        const response = await axios.post(baseUrl + "/todo/add-todo", { title, description }, httpOptions)
        return response.data;
    } catch (error) {
        console.log('error');
    }
}

export { signup, signin, getAllTodos ,addTodo};