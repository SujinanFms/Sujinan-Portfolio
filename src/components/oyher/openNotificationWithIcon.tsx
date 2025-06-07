import { App } from "antd";
import { NotificationType } from "model/noti";

export const useNotification = () => {
  const { notification } = App.useApp();

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    notification[type]({
      message,
      description,
    });
  };

  return openNotificationWithIcon;
};
