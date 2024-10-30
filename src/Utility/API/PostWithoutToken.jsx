import axios from "axios";
import { toast } from "react-toastify";
import { themelight } from "../../Components/common/ThemeSwitch/themelight";

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return themelight.includes(theme) ? "light" : "dark";
};

const showLoadingToast = (theme) =>
  toast.loading("⌛️ Please wait...", {
    position: "bottom-right",
    theme,
    isLoading: true,
    autoClose: false,
  });

const updateToast = (toastId, message, type, theme, autoClose = 1000) => {
  toast.update(toastId, {
    render: message,
    type,
    isLoading: false,
    autoClose,
    position: "bottom-right",
    theme,
  });
};

const createMessage = (status, description) => (
  <p>
    <b>Status:</b> {status}
    <br />
    <b>Desc:</b> {description}
  </p>
);

const handleSuccessResponse = (toastId, response, theme) => {
  const message = createMessage(response.data.status, response.data.message);
  const statusType = response.data.status === "OK" ? "success" : "warning";
  const autoClose = response.data.status === "OK" ? 1000 : 5000;

  updateToast(toastId, message, statusType, theme, autoClose);
  return {
    status: response.data.status,
    data: response.data.data || response.data,
    message: response.data.message,
  };
};

const handleErrorResponse = (toastId, error, url, theme) => {
  const errorMessage =
    error.response?.data?.message || error.message || "Error";
  const message =
    error.message === "Network Error"
      ? "Please Check Your Network connection⚠️"
      : errorMessage;

  updateToast(
    toastId,
    <p>
      <b>Error:</b> {message}
      <br />
      <b>URL:</b> 🔗{url}
    </p>,
    "error",
    theme,
    2500
  );

  return {
    status: "Catch",
    data: [],
    message: errorMessage,
  };
};

const PostAPI = async (databody, url) => {
  const theme = getTheme();
  const toastId = showLoadingToast(theme);

  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url,
      headers: { "Content-Type": "application/json" },
      data: databody,
    };

    const response = await axios.request(config);
    return handleSuccessResponse(toastId, response, theme);
  } catch (error) {
    return handleErrorResponse(toastId, error, url, theme);
  }
};

export default PostAPI;
