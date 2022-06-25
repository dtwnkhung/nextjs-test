export default function Button({ expand, bgColor, children, height, textColor, customClass, onClick, outline }) {
    return (
        <button className={`${outline ? outline : "border-0"} text-center px-8 ${customClass} ${textColor ? textColor : "text-white"} ${bgColor ? bgColor : "bg-primary"} ${expand ? expand : "inline-block"} ${height ? height : "h-11"}`} onClick={onClick}>{children}</button>
    );
}
