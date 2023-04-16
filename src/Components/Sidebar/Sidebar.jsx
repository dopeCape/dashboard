import React from "react";
import MenuTitle from "../MenuTitle/MenuTitle";
import UpgradCard from "../UpgradeCard/UpgradCard";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="main__sidebar">
      <div className="logo__sidebar">
        <div className="icon__sidebar">
          <svg
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.2137 22.9697C25.6509 21.7977 25.5236 20.63 26.0124 19.427C26.3437 18.6121 26.897 17.9788 27.6611 17.5494C29.1936 16.6872 31.0936 17.0116 32.3155 18.323C33.4496 19.5423 33.6183 21.5197 32.689 22.9292C32.0737 23.8629 31.2029 24.4196 30.0946 24.6012C29.4827 24.701 28.9071 24.6511 28.3546 24.4755C27.6585 24.2535 26.9124 24.6261 26.6715 25.3154C25.8575 27.6491 24.5986 29.6824 22.5618 31.1496C22.1229 31.4662 21.6057 31.7123 21.0869 31.8732C19.396 32.3981 17.7094 31.2339 17.5416 29.4656C17.4298 28.2987 17.8402 27.3703 18.7971 26.6733C21.6875 24.5668 22.2795 20.8339 20.2135 17.9271C19.5182 16.947 18.8229 15.9626 18.2068 14.9335C17.4977 13.7494 17.8006 12.2332 18.8341 11.3529C19.8839 10.4589 21.4629 10.3961 22.5179 11.2419C22.8199 11.4855 23.0841 11.7995 23.2983 12.1257C24.2423 13.5498 25.1605 14.9937 26.0924 16.4256C26.3282 16.7861 26.2869 17.0348 25.9547 17.3592C24.4635 18.8109 24.4609 21.2125 25.9125 22.7098C26.0063 22.8045 26.113 22.8836 26.2137 22.9697Z"
              fill="#fff"
            />
            <path
              d="M14.4818 5.59794C13.7469 6.67098 12.7987 7.36368 11.5114 7.54008C10.6397 7.65969 9.81532 7.4962 9.06152 7.04788C7.54962 6.14952 6.88274 4.34075 7.41022 2.62836C7.90071 1.0373 9.53049 -0.0959785 11.2162 0.00642075C12.3323 0.0735396 13.2496 0.550256 13.9603 1.42108C14.3519 1.90124 14.5962 2.42528 14.7193 2.99149C14.8742 3.7057 15.5686 4.16607 16.2871 4.03097C18.7163 3.57233 21.1059 3.64891 23.394 4.68237C23.887 4.90524 24.3586 5.23051 24.757 5.5988C26.0555 6.80264 25.8877 8.84546 24.4395 9.87289C23.4835 10.5518 22.475 10.6594 21.3925 10.1784C18.1243 8.72499 14.5945 10.0742 13.1059 13.314C12.6033 14.406 12.0974 15.4988 11.5122 16.5469C10.8393 17.7525 9.37474 18.2464 8.09604 17.7895C6.79755 17.3257 5.95512 15.9885 6.16164 14.6521C6.22187 14.2683 6.363 13.8837 6.53768 13.5352C7.30094 12.0069 8.09432 10.4907 8.86963 8.96851C9.06496 8.58387 9.30074 8.4961 9.74733 8.62173C11.7497 9.18966 13.8321 7.99357 14.4052 5.98861C14.4422 5.86039 14.4577 5.72873 14.4818 5.59794Z"
              fill="#fff"
            />
            <path
              d="M5.15916 24.1985C6.45421 24.3172 7.52123 24.8077 8.30256 25.8455C8.83177 26.5485 9.09078 27.3479 9.06668 28.2247C9.01935 29.9827 7.76475 31.4464 6.01191 31.8208C4.38299 32.1675 2.60003 31.2967 1.86775 29.7754C1.38243 28.7677 1.35231 27.7351 1.76535 26.6896C1.99424 26.1139 2.33242 25.645 2.76697 25.262C3.31511 24.7793 3.37879 23.9481 2.91068 23.387C1.3265 21.4896 0.228505 19.3659 0.0159621 16.8644C-0.0296443 16.3249 0.0245633 15.7553 0.151917 15.2269C0.57098 13.5068 2.43568 12.6575 4.03879 13.4216C5.0972 13.925 5.68234 14.7545 5.7899 15.9334C6.11345 19.495 9.01161 21.9199 12.5663 21.6411C13.7641 21.5473 14.9663 21.4569 16.1658 21.4569C17.546 21.4569 18.6914 22.4947 18.9159 23.8345C19.144 25.1941 18.3867 26.5812 17.1192 27.0527C16.7552 27.187 16.3499 27.2515 15.9601 27.2687C14.2529 27.347 12.5431 27.3926 10.8359 27.458C10.4056 27.4752 10.2129 27.3117 10.1062 26.8608C9.62601 24.8361 7.56683 23.6004 5.53692 24.0771C5.40784 24.1047 5.28479 24.1563 5.15916 24.1985Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="companyName__sidebar">Realply</div>
      </div>
      <div className="firstgroup__sidebar">
        <div className="menucontainer__sidebar">
          <MenuTitle
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50002 18.3333H12.5C16.6667 18.3333 18.3334 16.6667 18.3334 12.5V7.49999C18.3334 3.33332 16.6667 1.66666 12.5 1.66666H7.50002C3.33335 1.66666 1.66669 3.33332 1.66669 7.49999V12.5C1.66669 16.6667 3.33335 18.3333 7.50002 18.3333Z"
                  stroke="#D4D4FC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 1.66666V18.3333"
                  stroke="#D4D4FC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66669 7.91666H10"
                  stroke="#D4D4FC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12.0833H18.3333"
                  stroke="#D4D4FC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Dashboard"}
          />
        </div>

        <div className="menucontainer__sidebar">
          <MenuTitle
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.08335 15.8333H6.66669C3.33335 15.8333 1.66669 15 1.66669 10.8333V6.66666C1.66669 3.33332 3.33335 1.66666 6.66669 1.66666H13.3334C16.6667 1.66666 18.3334 3.33332 18.3334 6.66666V10.8333C18.3334 14.1667 16.6667 15.8333 13.3334 15.8333H12.9167C12.6584 15.8333 12.4084 15.9583 12.25 16.1667L11 17.8333C10.45 18.5667 9.55002 18.5667 9.00002 17.8333L7.75002 16.1667C7.61669 15.9833 7.30835 15.8333 7.08335 15.8333Z"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3304 9.16667H13.3378"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99626 9.16667H10.0037"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66209 9.16667H6.66957"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Messages"}
          />
        </div>
        <div className="menucontainer__sidebar">
          <MenuTitle
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33333 18.3333H11.6667C15.8333 18.3333 17.5 16.6667 17.5 12.5V7.5C17.5 3.33334 15.8333 1.66667 11.6667 1.66667H8.33333C4.16667 1.66667 2.5 3.33334 2.5 7.5V12.5C2.5 16.6667 4.16667 18.3333 8.33333 18.3333Z"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.75 6.31667V7.15C13.75 7.83333 13.1917 8.4 12.5 8.4H7.5C6.81667 8.4 6.25 7.84167 6.25 7.15V6.31667C6.25 5.63333 6.80833 5.06667 7.5 5.06667H12.5C13.1917 5.06667 13.75 5.625 13.75 6.31667Z"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.7801 11.6667H6.78973"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99604 11.6667H10.0057"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.2119 11.6667H13.2216"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.7801 14.5833H6.78973"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99604 14.5833H10.0057"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.2119 14.5833H13.2216"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Calendar"}
          />
        </div>
        <div className="menucontainer__sidebar">
          <MenuTitle
            icon={
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07498 11.0667H4.64998V17.0667C4.64998 18.4667 5.40832 18.75 6.33332 17.7L12.6417 10.5333C13.4167 9.65833 13.0917 8.93333 11.9167 8.93333H9.34165V2.93333C9.34165 1.53333 8.58332 1.25 7.65832 2.3L1.34998 9.46667C0.583316 10.35 0.908317 11.0667 2.07498 11.0667Z"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Campaigns"}
          />
        </div>
      </div>

      <div className="secondgroup__sidebar">
        <div className="secondgroup__wrapper">
          <MenuTitle
            title={"Settings"}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50002 18.3333H12.5C16.6667 18.3333 18.3334 16.6667 18.3334 12.5V7.5C18.3334 3.33333 16.6667 1.66667 12.5 1.66667H7.50002C3.33335 1.66667 1.66669 3.33333 1.66669 7.5V12.5C1.66669 16.6667 3.33335 18.3333 7.50002 18.3333Z"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.975 15.4167V12.1667"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.975 6.20833V4.58333"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.975 10.5417C14.1716 10.5417 15.1417 9.57162 15.1417 8.375C15.1417 7.17838 14.1716 6.20833 12.975 6.20833C11.7784 6.20833 10.8083 7.17838 10.8083 8.375C10.8083 9.57162 11.7784 10.5417 12.975 10.5417Z"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.02502 15.4167V13.7917"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.02502 7.83333V4.58333"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.025 13.7917C8.22162 13.7917 9.19167 12.8216 9.19167 11.625C9.19167 10.4284 8.22162 9.45833 7.025 9.45833C5.82839 9.45833 4.85834 10.4284 4.85834 11.625C4.85834 12.8216 5.82839 13.7917 7.025 13.7917Z"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div className="secondgroup__wrapper">
          <MenuTitle
            title={"Help?"}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 7.5V11.6667"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99998 17.8417H4.94998C2.05832 17.8417 0.849985 15.775 2.24998 13.25L4.84998 8.56667L7.29998 4.16667C8.78332 1.49167 11.2167 1.49167 12.7 4.16667L15.15 8.575L17.75 13.2583C19.15 15.7833 17.9333 17.85 15.05 17.85H9.99998V17.8417Z"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99542 14.1667H10.0029"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div className="upgrade__sidebar">
        <UpgradCard />
      </div>
      <div className="logout__sidebar">
        <MenuTitle
          title={"Log out"}
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3334 12.5L18.3334 7.50001C18.3334 3.33334 16.6667 1.66668 12.5 1.66668L7.50002 1.66668C3.33335 1.66668 1.66669 3.33334 1.66669 7.50001L1.66669 12.5C1.66669 16.6667 3.33335 18.3333 7.50002 18.3333L12.5 18.3333C16.6667 18.3333 18.3334 16.6667 18.3334 12.5Z"
                stroke="#F8F8F8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.92499 12.5L5.42499 10L7.92499 7.5"
                stroke="#F8F8F8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.42499 10L12.0917 10"
                stroke="#F8F8F8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7583 15C14.8416 11.7583 14.8416 8.24167 13.7583 5"
                stroke="#F8F8F8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default Sidebar;
