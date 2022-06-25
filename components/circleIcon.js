
export default function CircleIcon({ children, borderColor, customClass }) {
    return (
        <>
            <div className={`flex rounded-full border ${customClass} ${borderColor}`}>{children}</div>
        </>
    );

}
