interface IProps {
    color: string;
    size: string;
}

export const AddIcon = ({ color, size}: IProps) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill={`${color || "none"}`}
        width={size}
        height={size}
        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const CloseIcon = ({ color, size = '1rem' }: IProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1216 1312"
      >
        <path
          fill={color}
          d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68z"
        />
      </svg>
    )
}