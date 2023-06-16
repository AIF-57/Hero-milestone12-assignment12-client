const PrimaryButton = ({children,btnWidth}) => {
    return (
        <div>
            <button className={`bg-primary text-base-100 h-12 text-xs font-semibold my-2 md:my-5 rounded-sm px-5 md:px-0 md:btn-wide`}>{children}</button>
        </div>
    );
};

export default PrimaryButton;