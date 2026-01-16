type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => (
  <button
    {...props}
    className="text-base text-[1.5rem] sm:text-[32px] md:text-[1.75rem] xl:text-[32px] mt-[25px] bg-[#FEE3C7] text-[#170F08] px-11 py-8 rounded-[30px]"
  >
    {children}
  </button>
);
