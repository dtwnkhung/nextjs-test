
export default function FlowerLine({ fillColor, customClass }) {
    return (
        <>
            <svg className={customClass} width="19" height="23" viewBox="0 0 19 23" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
                <path d="M6.73326 13.9108L7.69079 13.6895C7.71052 13.6847 7.74411 13.6772 7.78463 13.6639C8.04886 13.5927 8.2752 13.4218 8.41608 13.1871C8.55695 12.9525 8.60141 12.6724 8.5401 12.4057L8.53584 12.3886C8.50435 12.2608 8.4492 12.14 8.37323 12.0325C8.26602 11.8963 8.13327 11.7824 7.98243 11.6971C7.80484 11.5959 7.619 11.5099 7.42689 11.4401L6.37711 11.0568C5.78798 10.8382 5.19885 10.6244 4.60439 10.416C4.21892 10.2789 3.8921 10.1584 3.60793 10.0705C3.55461 10.0545 3.49543 10.0374 3.44745 10.0209C3.19325 9.93295 2.92765 9.88231 2.65892 9.87054C2.52265 9.86553 2.38692 9.89027 2.26119 9.94305C2.12989 9.99956 2.01198 10.0831 1.91518 10.1883C1.86712 10.243 1.82192 10.3001 1.77975 10.3594C1.74034 10.42 1.70422 10.4827 1.67153 10.5471C1.63522 10.6162 1.60404 10.6878 1.57822 10.7614C1.38345 11.3375 1.2865 11.9421 1.29139 12.5502C1.24553 13.1457 1.35579 13.743 1.61128 14.2829C1.68409 14.4056 1.7818 14.5117 1.89811 14.5943C2.09571 14.7173 2.32434 14.7813 2.55709 14.7787C2.89266 14.7841 3.22712 14.739 3.54928 14.6449L6.73006 13.9097L6.73326 13.9108ZM17.4149 8.8277C17.1536 8.27903 16.8022 7.77803 16.3753 7.34554C16.3201 7.29064 16.2609 7.23986 16.1983 7.19359C16.1404 7.15031 16.0802 7.11009 16.0181 7.0731C15.9544 7.03816 15.8889 7.00665 15.8219 6.97873C15.6892 6.9265 15.5469 6.90288 15.4044 6.90942C15.2681 6.91714 15.1351 6.95443 15.0147 7.01872C14.7785 7.14756 14.562 7.3095 14.3717 7.49962C14.3355 7.53588 14.2896 7.5764 14.2491 7.61478C14.0321 7.81898 13.7906 8.07009 13.5037 8.36279C13.0605 8.81064 12.6226 9.26204 12.1901 9.717L11.4138 10.5221C11.2716 10.669 11.1421 10.8278 11.0267 10.9966C10.9283 11.1396 10.8588 11.3004 10.822 11.47C10.8006 11.5999 10.8037 11.7326 10.8311 11.8613L10.8353 11.8784C10.8967 12.1449 11.059 12.3772 11.2883 12.5264C11.5175 12.6756 11.7957 12.73 12.0642 12.6781C12.0963 12.6737 12.1282 12.6676 12.1597 12.66L16.299 11.7035C16.6299 11.6469 16.9503 11.5408 17.2497 11.389C17.4601 11.2893 17.6377 11.1315 17.7615 10.9342C17.8301 10.8089 17.8717 10.6707 17.8836 10.5285C17.8784 9.93029 17.7166 9.34393 17.4144 8.8277H17.4149ZM10.0057 10.5684C10.2508 10.1452 10.3644 9.65854 10.332 9.17052C10.4221 7.63611 10.517 6.1017 10.5927 4.56623C10.6433 3.98744 10.6621 3.40633 10.6492 2.82549C10.6801 2.32438 10.563 1.82525 10.3123 1.39025C9.77381 0.690756 8.62487 0.748337 7.84114 0.8571C7.60123 0.890155 7.36024 0.934939 7.12139 0.99252C6.88254 1.0501 6.64689 1.11195 6.41603 1.18605C5.66429 1.43237 4.60705 1.88448 4.42738 2.75138C4.3922 3.25209 4.50492 3.75211 4.75154 4.18929C4.99389 4.71714 5.26496 5.23134 5.56352 5.72956C6.30354 7.0763 7.05741 8.41451 7.80969 9.75485C7.99372 10.2073 8.30808 10.5947 8.71284 10.8681C8.74158 10.8806 8.77094 10.8916 8.80081 10.9011C8.99556 10.975 9.20786 10.9893 9.41074 10.9422L9.44699 10.9336C9.63455 10.8828 9.80433 10.7809 9.93749 10.6393C9.96145 10.6169 9.98423 10.5932 10.0057 10.5684V10.5684ZM9.64639 14.6758C9.52926 14.5112 9.36303 14.3878 9.17149 14.3233C8.97996 14.2589 8.77295 14.2567 8.58009 14.317C8.53475 14.3319 8.49056 14.3501 8.44787 14.3714C8.38185 14.405 8.31888 14.4442 8.25967 14.4887C8.09031 14.6221 7.93904 14.7769 7.80969 14.9493C7.77856 14.9971 7.7438 15.0424 7.70572 15.0848L7.03982 16.0007C6.66235 16.5136 6.29021 17.0281 5.92127 17.5506C5.68028 17.8881 5.47236 18.1733 5.30761 18.4249C5.27616 18.4729 5.24363 18.5257 5.21431 18.5678C5.0578 18.7909 4.93443 19.0355 4.84804 19.294C4.80499 19.4257 4.79134 19.5653 4.80805 19.7029C4.82636 19.8464 4.87468 19.9845 4.94987 20.1081C4.98985 20.1698 5.03291 20.2294 5.07889 20.2867C5.12661 20.3422 5.17734 20.3951 5.23084 20.4451C5.28786 20.4994 5.3488 20.5495 5.41318 20.5949C5.87336 20.9072 6.37588 21.1521 6.90546 21.3221C7.34577 21.4682 7.80342 21.5557 8.2666 21.5823C8.34553 21.5862 8.42464 21.5844 8.50332 21.5769C8.65005 21.5668 8.79458 21.5358 8.9325 21.4847C9.06772 21.4342 9.19086 21.3559 9.29398 21.2549C9.39169 21.157 9.46684 21.0389 9.51417 20.9089C9.60582 20.6523 9.66004 20.3839 9.67518 20.1118C9.67785 20.0606 9.68531 19.9988 9.69064 19.9423C9.71677 19.6421 9.7285 19.2897 9.74822 18.8755C9.78021 18.2383 9.80634 17.6034 9.82606 16.9668L9.86872 15.8354C9.88618 15.5638 9.86245 15.2911 9.79834 15.0266C9.7666 14.9024 9.71531 14.784 9.64639 14.6758V14.6758ZM17.1622 16.4464C16.9713 16.2525 16.7537 16.0868 16.516 15.9543C16.4713 15.9293 16.4185 15.8957 16.3705 15.8669C16.1114 15.7112 15.8 15.5475 15.4364 15.3497C14.8781 15.0439 14.3171 14.7432 13.7532 14.4476L12.7557 13.9182C12.7029 13.8969 12.6517 13.8716 12.6027 13.8425C12.4109 13.7443 12.2071 13.6716 11.9965 13.6261C11.9239 13.6121 11.8502 13.6045 11.7763 13.6031C11.7286 13.6025 11.6808 13.6054 11.6334 13.6117C11.4338 13.6426 11.2491 13.7357 11.1055 13.8778C10.9619 14.0198 10.8668 14.2036 10.8337 14.4029C10.8188 14.5295 10.8236 14.6578 10.8481 14.783C10.906 15.0488 11.0035 15.3044 11.1376 15.5411L11.6708 16.5397C11.9672 17.1031 12.2686 17.6636 12.575 18.2213C12.7733 18.5849 12.9386 18.8968 13.0932 19.1548C13.1225 19.2033 13.1556 19.2561 13.1806 19.3009C13.3133 19.5386 13.4792 19.7562 13.6733 19.9471C13.7727 20.0428 13.8919 20.1156 14.0225 20.1603C14.1597 20.2061 14.305 20.2225 14.449 20.2083C14.522 20.1996 14.5944 20.187 14.666 20.1705C14.7368 20.1516 14.8066 20.129 14.875 20.1028C14.9488 20.075 15.0204 20.0419 15.0893 20.0036C15.4944 19.7764 15.8678 19.4967 16.1999 19.1719C16.6015 18.7868 16.9462 18.3464 17.2235 17.8641C17.2616 17.7948 17.2945 17.7228 17.3222 17.6487C17.3481 17.5802 17.3705 17.5104 17.3893 17.4397C17.4055 17.3679 17.418 17.2953 17.4267 17.2222C17.4403 17.0785 17.4236 16.9335 17.3776 16.7967C17.3325 16.6656 17.2591 16.5461 17.1627 16.4464H17.1622Z" />
            </svg>



        </>
    );

}