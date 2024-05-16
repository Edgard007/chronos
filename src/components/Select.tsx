import styled from "styled-components";

interface WrapperProps {
  width?: string;
  error?: boolean;
  isActive?: boolean;
}

export interface Options {
  key?: string;
  label: string;
  value: string;
}

interface SelectProps extends WrapperProps {
  label: string;
  options: Options[];
  onChange?: (value: string, e: any) => void;
  value: string | number | undefined;
  readonly?: boolean;
  className?: string;
  placeholder?: string;
}

const OptionStyle: React.CSSProperties = {
  color: "var(--color-secundary)",
  backgroundColor: "var(--color-primary)",
  height: "3.4375em",
};

const Select = ({
  label,
  options,
  onChange,
  value,
  readonly,
  className = "",
  width,
  error,
  placeholder = "Select a option",
}: SelectProps) => (
  <Wrapper width={width} error={error} isActive={!!value}>
    <div className="contain">
      <label>{label}</label>
      <select
        className={"customSelect " + className}
        disabled={readonly}
        onChange={(e) => onChange && onChange(e?.target?.value, e)}
        value={value}
      >
        <option
          style={OptionStyle}
          value=""
          label={placeholder}
          className="opt"
          disabled
        />
        <>
          {(options || []).map(({ key, label, value }, i) => (
            <option
              style={OptionStyle}
              defaultValue={value}
              value={value}
              key={key || i + 1}
            >
              {label}
            </option>
          ))}
        </>
      </select>
    </div>
  </Wrapper>
);

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

    select {
      appearance: none;
      /* safari */
      -webkit-appearance: none;
      /* other styles for aesthetics */

      border: ${(props) =>
        props?.error
          ? "1px solid var(--color-red)"
          : "1px solid rgba(var(--color-secundary-rgb), 0.6)"};
      border-radius: 0.35rem;
      background: transparent;
      width: 104%;
      padding: 0.75rem;
      height: 3.4375em;

      color: ${(props) =>
        props?.isActive
          ? "var(--color-secundary)"
          : "rgba(var(--color-secundary-rgb), 0.6);"};

      :focus {
        border: 2px solid var(--color-blue);
        outline: none;
      }
    }
  }

  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus,
  select:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
    transition-property: background-color, color;
  }
`;

export default Select;
