import styled from "styled-components";
import { useMsal } from "@azure/msal-react";
import { butterup } from "butterup-toast";
import { useTranslation } from "react-i18next";

// ==> Config
import { loginRequest } from "@src/authConfig";

// Components
import Button from "@components/Button";

// Hook
import useSessionContext from "@contexts/useSessionContext";

const SignIn = () => {
  const { instance } = useMsal();

  // Translations
  const { t } = useTranslation();
  const { dispatch } = useSessionContext();

  const handleLogin = async () => {
    try {
      const { account, accessToken } = await instance.loginPopup(loginRequest);

      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            id: account?.localAccountId ?? "",
            avatar: "",
            name: account?.name ?? "",
            username: account?.username ?? "",
            email: account?.username ?? "",
          },
          session: {
            isLogeedIn: true,
            token: accessToken ?? "",
            logoutTime: new Date().toDateString(),
            signInTime: new Date().toDateString(),
          },
        },
      });

      butterup.toast({
        title: t("sign-in.title") ?? "",
        message: t("sign-in.success") ?? "",
        type: "success",
        location: "bottom-right",
      });
    } catch (err) {
      console.error("Failed SignIn", err);

      butterup.toast({
        title: t("sign-in.title") ?? "",
        message: t("sign-in.error") ?? "",
        type: "error",
        location: "bottom-right",
      });
    }
  };

  return (
    <Wrapper>
      <div className="sec_logotipo">
        <img src="image/OFBOX-Icon.png" alt={t("appLogo-alt") ?? ""} />
        <span>{t("app_name")}</span>
      </div>
      <div className="sec_descrip">
        <h1>{t("learn-page.title")}</h1>
        <p>{t("learn-page.descrip")}</p>
      </div>
      <Button
        text={t("learn-page.btn")}
        type="submit"
        width="12rem"
        onClick={handleLogin}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px;

  /* Center use position absolute */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  width: 80%;
  min-height: 100%;

  .sec_logotipo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;

    img {
      width: 35px;
      height: 35px;
      aspect-ratio: 1/1;
    }

    span {
      font-size: var(--font-md);
      font-weight: bold;
      color: var(--color-secundary);
      margin-top: 10px;
    }
  }

  .sec_descrip {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: var(--font-bg);
      font-weight: var(--bold-weight);
      color: var(--color-secundary);
      text-align: center;
    }

    p {
      font-size: var(--font-md);
      font-weight: normal;
      color: rgba(var(--color-secundary-rgb), 0.6);
      text-align: center;
    }
  }
`;

export default SignIn;
