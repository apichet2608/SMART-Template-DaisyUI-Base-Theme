import axios from "axios";
import { toast } from "react-toastify";
import { themelight } from "../../Components/common/ThemeSwitch/themelight";

const PostAPI = async (databody, url) => {
  const theme = !themelight.includes(localStorage.getItem("theme"))
    ? "dark"
    : "light";
  const showToast = toast.loading("⌛️ Please wait...", {
    position: "bottom-right",
    theme,
    isLoading: true,
    autoClose: false,
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: databody,
  };

  const updateToast = (message, type, autoClose = 1000) => {
    toast.update(showToast, {
      render: message,
      type,
      isLoading: false,
      autoClose,
      position: "bottom-right",
      theme,
    });
  };

  try {
    const response = await axios.request(config);
    const message = (
      <p>
        <b>Status:</b> {response.data.status}
        <br />
        <b>Desc:</b> {response.data.message}
      </p>
    );

    if (response.data.status === "OK") {
      updateToast(message, "success");
      return {
        status: "OK",
        data: response.data.data,
        message: response.data.message,
      };
    } else {
      updateToast(message, "warning", 5000);
      return {
        status: "ERROR",
        data: response.data,
        message: response.data.message,
      };
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Error";

    const networkErrorMessage =
      error.message === "Network Error"
        ? "Please Check Your Network connection⚠️"
        : errorMessage;

    updateToast(
      <p>
        <b>Error:</b> {networkErrorMessage}
        <br />
        <b>URL:</b> 🔗{url}
      </p>,
      "error",
      2500
    );

    return {
      status: "Catch",
      data: [],
      message: error,
    };
  }
};

export default PostAPI;
