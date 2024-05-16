import styled from "styled-components";

interface WrapperProps {
  width?: string;
  error?: boolean;
}
interface InputProps extends WrapperProps {
  label: string;
  type: "text" | "email" | "password" | "time" | "textarea";
  onChange?: (value: string, e: any) => void;
  value: string | number | undefined;
  readonly?: boolean;
  className?: string;
  placeholder?: string;
}

const Input = ({
  label,
  type,
  onChange,
  value,
  readonly,
  className,
  width,
  error,
  placeholder,
}: InputProps) => {
  return (
    <Wrapper width={width} error={error}>
      <div className="contain">
        <label>{label}</label>
        <>
          {type === "textarea" ? (
            <textarea
              className={"customInput " + className}
              onChange={(e) => onChange && onChange(e?.target?.value, e)}
              value={value}
              readOnly={readonly}
              placeholder={placeholder}
            />
          ) : (
            <input
              type={type}
              className={"customInput " + className}
              onChange={(e) => onChange && onChange(e?.target?.value, e)}
              value={value}
              readOnly={readonly}
              placeholder={placeholder}
            />
          )}
        </>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperProps>`
  margin: 10px 0;
  width: ${(props) => props?.width || "90%"};
  display: flex;
  justify-content: center;
  align-items: center;

  .contain {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      text-align: left;
      width: 100%;
      font-size: 15px;
      color: var(--color-secundary);

      margin-bottom: 0.5rem;
    }

    textarea {
      height: 5.4375em !important;
      resize: none;
    }

    input,
    textarea {
      border: ${(props) =>
        props?.error
          ? "1px solid var(--color-red)"
          : "1px solid rgba(var(--color-secundary-rgb), 0.6)"};
      border-radius: 0.35rem;
      background: transparent;
      width: 100%;
      padding: 0.75rem;
      height: 1.4375em;

      color: var(--color-secundary);

      :focus {
        border: 2px solid var(--color-blue);
        outline: none;
      }
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
    transition-property: background-color, color;
  }
`;

export default Input;
