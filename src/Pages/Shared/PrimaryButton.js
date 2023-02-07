const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className='btn-wide bg-primary text-base-100 h-12 text-xs font-semibold my-5 rounded-sm'>{children}</button>
        </div>
    );
};

export default PrimaryButton;