import React from "react";
import "./productCSS.css";
import { ProductInterface } from "../Interfaces/ProductInterface";
import moment from "moment";
import "moment/locale/ka";
moment.locale("ka");

moment.updateLocale("ka", {
  relativeTime: {
    future: "in %s",
    past: "%s წინ",
    s: "რამდენიმე წამის წინ",
    ss: "%d წამის წინ",
    m: "1 წუთის წინ",
    mm: "%d წუთის წინ",
    h: "1 საათის წინ",
    hh: "%d საათის წინ",
    d: "1 დღის წინ",
    dd: "%d დღის წინ",
    M: "1 თვის წინ",
    MM: "%d თვის წინ",
    y: "1 წლის წინ",
    yy: "%d წლის წინ",
  },
});
interface Props {
  product: ProductInterface;
}

const ProductComponent: React.FC<Props> = ({ product }) => {
  const uploadTime = moment(product.order_date);
  const timeSinceUpload = moment.duration(moment().diff(uploadTime)).humanize();

  return (
    <div className="Frame33744">
      <div className="Frame33518">
        <div className="img">
          <img
            className="img-fluid"
            src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
            alt={product.car_model}
          />
        </div>
        <div className="carname">
          {product.for_rent === false ? (
            <span className="model">
              {product.car_model}&nbsp;&nbsp;
              <span className="year">{product.prod_year} წ</span>
            </span>
          ) : (
            <span className="model">
              <span className="forRent">ქირავდება</span>&nbsp;&nbsp;&nbsp;
              {product.car_model}&nbsp;&nbsp;
              <span className="year">{product.prod_year} წ</span>
            </span>
          )}
        </div>
        <div className="details">
          <div className="adetails">
            <svg
              className="motor"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.52488 0C5.13653 0 4.82171 0.350658 4.82171 0.783217C4.82171 1.21578 5.13653 1.56643 5.52488 1.56643H7.33347V3.27273H5.68644C5.51194 3.27273 5.3446 3.3412 5.22121 3.46308L4.00406 4.66538H3.33668C2.97331 4.66538 2.67875 4.95635 2.67875 5.31528V6.54545H1.50009V5.13369C1.50009 4.7084 1.16428 4.36364 0.750043 4.36364C0.335806 4.36364 0 4.7084 0 5.13369V10.084C0 10.5093 0.335806 10.8541 0.750043 10.8541C1.16428 10.8541 1.50009 10.5093 1.50009 10.084V8.08556H2.67875V9.95745C2.67875 10.3164 2.97331 10.6074 3.33668 10.6074H4.00406L5.22121 11.8096C5.3446 11.9315 5.51194 12 5.68644 12H10.8559C10.9983 12 11.1368 11.9544 11.2507 11.87L13.1305 10.4774C13.2961 10.3546 13.3936 10.162 13.3936 9.95745V8.08556H14.4999V10.084C14.4999 10.5093 14.8357 10.8541 15.25 10.8541C15.6642 10.8541 16 10.5093 16 10.084V5.13369C16 4.7084 15.6642 4.36364 15.25 4.36364C14.8357 4.36364 14.4999 4.7084 14.4999 5.13369V6.54545H13.3936V5.31528C13.3936 5.14292 13.3243 4.97761 13.2009 4.85573L11.7911 3.46308C11.6677 3.3412 11.5004 3.27273 11.3259 3.27273H8.7398V1.56643H10.5475C10.9358 1.56643 11.2507 1.21578 11.2507 0.783217C11.2507 0.350658 10.9358 0 10.5475 0H8.03664H5.52488ZM4.74181 5.77483L5.95896 4.57253H11.0533L12.0778 5.58448V9.6325L10.6366 10.7002H5.95896L4.74181 9.4979C4.61843 9.37602 4.45108 9.30754 4.27658 9.30754H3.99461V5.96518H4.27658C4.45108 5.96518 4.61843 5.89671 4.74181 5.77483Z"
                fill="#9CA2AA"
              />
            </svg>
            <p className="a">
              {(product.engine_volume / 1000).toFixed(1)}დატ.
              {product.fuel_type_id === 2
                ? "ბენზინი"
                : product.fuel_type_id === 3
                ? "დიზელი"
                : "ჰიბრიდი"}
            </p>
          </div>
          <div className="bdetails">
            <svg
              className="garbeni"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7"
                cy="7"
                r="6.3"
                stroke="#9CA2AA"
                stroke-width="1.4"
              />
              <circle
                cx="7"
                cy="7"
                r="1.3"
                stroke="#9CA2AA"
                stroke-width="1.4"
              />
              <path
                d="M11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7"
                stroke="#9CA2AA"
                stroke-width="1.4"
                stroke-linecap="round"
              />
              <path
                d="M8 6L9.5 4.5"
                stroke="#9CA2AA"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="b">{product.car_run_km} კმ</p>
          </div>
          <div className="cdetails">
            <svg
              className="avtomatika"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.6"
                y="7.6"
                width="10.8"
                height="7.8"
                rx="1.2"
                stroke="#8C929B"
                stroke-width="1.2"
              />
              <path
                d="M6 5V10"
                stroke="#8C929B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 12V13.5"
                stroke="#8C929B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="6"
                cy="2.5"
                r="1.8"
                stroke="#8C929B"
                stroke-width="1.4"
              />
              <path
                d="M3 10V13"
                stroke="#8C929B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 10V13"
                stroke="#8C929B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="c">
              {product.gear_type_id === 1
                ? "ავტომატიკა"
                : product.gear_type_id === 2
                ? "მექანიკა"
                : product.gear_type_id === 3
                ? "ტიპტრონიკი"
                : "სხვა"}
            </p>
          </div>
          <div className="ddetails">
            <svg
              className="ruli"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7"
                cy="7"
                r="6.3"
                stroke="#9CA2AA"
                stroke-width="1.4"
              />
              <circle
                cx="7"
                cy="7"
                r="1.3"
                stroke="#9CA2AA"
                stroke-width="1.4"
              />
              <path
                d="M8.5 7L12.5 5.5"
                stroke="#9CA2AA"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.21387 6.99979L0.999766 6.29883"
                stroke="#9CA2AA"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 8.5V13"
                stroke="#9CA2AA"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="d">
              {product.drive_type_id === 1
                ? "მარჯვენა"
                : product.drive_type_id === 2
                ? "მარცხენა"
                : product.drive_type_id === 3
                ? "სხვა"
                : ""}
            </p>
          </div>
        </div>
        <div className="threeIcons">
          <div>
            <svg
              className="pencil"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon"
                d="M5.97263 14H3.13887C2.83706 13.9996 2.54773 13.8795 2.33432 13.6661C2.1209 13.4527 2.00082 13.1633 2.0004 12.8615V10.2233C2.00036 10.0743 2.02978 9.92687 2.08699 9.78937C2.14419 9.65186 2.22803 9.52704 2.33369 9.42208L9.41848 2.33328C9.6321 2.11987 9.92171 2 10.2237 2C10.5256 2 10.8152 2.11987 11.0288 2.33328L13.6663 4.97155C13.8797 5.18517 13.9996 5.47478 13.9996 5.77673C13.9996 6.07869 13.8797 6.36829 13.6663 6.58191L7.58219 12.6668H13.0566C13.2334 12.6668 13.403 12.7371 13.528 12.8621C13.653 12.9871 13.7232 13.1566 13.7232 13.3334C13.7232 13.5102 13.653 13.6798 13.528 13.8048C13.403 13.9298 13.2334 14 13.0566 14H5.97263ZM3.33355 12.6668H4.36306L3.33355 11.6373V12.6668ZM5.97343 12.3912L10.73 7.63466L8.36654 5.27119L3.60996 10.0278L5.97343 12.3912ZM11.6722 6.69248L12.5879 5.77673L10.2245 3.41326L9.30792 4.32901L11.6722 6.69248Z"
                fill="#6F7383"
              />
            </svg>
          </div>
          <div>
            <svg
              className="carr"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.25893 14.3789V1.61978C8.28343 1.25628 8.60762 0.979985 8.98481 1.00114C9.362 0.979985 9.68619 1.25628 9.71069 1.61978V14.3789C9.68657 14.7427 9.36239 15.0196 8.98481 14.9989C8.60723 15.0196 8.28305 14.7427 8.25893 14.3789ZM12.6142 14.2984C12.2133 14.2984 11.8884 13.9851 11.8884 13.5986H11.1625V12.2514H14.9189V8.76632L14.8884 8.69633H11.1625V7.2967H14.2533L12.9569 4.44634H11.1625V3.10059H13.0251C13.5064 3.10567 13.9391 3.38467 14.1277 3.8116L15.7108 7.2995H16.2741C16.675 7.2995 17 7.61282 17 7.99932C17 8.38581 16.675 8.69913 16.2741 8.69913H16.2436V12.9253C16.2526 13.2872 15.9563 13.5879 15.5809 13.5979H15.5178C15.5178 13.9844 15.1928 14.2977 14.7919 14.2977L12.6142 14.2984ZM2.4519 13.5985C2.4519 13.985 2.77689 14.2984 3.17778 14.2984L5.35542 14.2963C5.75632 14.2963 6.0813 13.9829 6.0813 13.5964H6.80718V12.2514H3.05003V8.7691L3.07979 8.69912H6.80718V7.29948H3.71493L5.0099 4.44632H6.80718V3.10057H4.9424C4.46076 3.1052 4.02766 3.3843 3.83906 3.81159L2.25591 7.29948H1.69626C1.30381 7.30789 0.99244 7.62092 1.00014 7.9993C0.992841 8.37753 1.30398 8.69032 1.69626 8.69912H1.72602V12.9253C1.71667 13.287 2.01224 13.5879 2.3873 13.5985H2.4519Z"
                fill="#6F7383"
              />
              <path
                d="M8.25893 1.61978L8.20893 1.61641V1.61978H8.25893ZM8.25893 14.3789H8.20882L8.20904 14.3822L8.25893 14.3789ZM8.98481 1.00114L8.98199 1.05137L8.98761 1.05106L8.98481 1.00114ZM9.71069 1.61978H9.7608L9.76058 1.61642L9.71069 1.61978ZM9.71069 14.3789L9.76069 14.3822V14.3789H9.71069ZM8.98481 14.9989L8.98757 14.9487L8.98207 14.949L8.98481 14.9989ZM11.8884 13.5986H11.9384V13.5486H11.8884V13.5986ZM12.6142 14.2984V14.3484H12.6143L12.6142 14.2984ZM11.1625 13.5986H11.1125V13.6486H11.1625V13.5986ZM11.1625 12.2514V12.2014H11.1125V12.2514H11.1625ZM14.9189 12.2514V12.3014H14.9689V12.2514H14.9189ZM14.9189 8.76632H14.9689V8.7559L14.9648 8.74635L14.9189 8.76632ZM14.8884 8.69633L14.9343 8.67636L14.9212 8.64633H14.8884V8.69633ZM11.1625 8.69633H11.1125V8.74633H11.1625V8.69633ZM11.1625 7.2967V7.2467H11.1125V7.2967H11.1625ZM14.2533 7.2967V7.3467H14.331L14.2988 7.276L14.2533 7.2967ZM12.9569 4.44634L13.0024 4.42564L12.989 4.39634H12.9569V4.44634ZM11.1625 4.44634H11.1125V4.49634H11.1625V4.44634ZM11.1625 3.10059V3.05059H11.1125V3.10059H11.1625ZM13.0251 3.10059L13.0256 3.05059H13.0251V3.10059ZM14.1277 3.8116L14.082 3.83181L14.0822 3.83227L14.1277 3.8116ZM15.7108 7.2995L15.6653 7.32016L15.6786 7.3495H15.7108V7.2995ZM16.2436 8.69913V8.64913H16.1936V8.69913H16.2436ZM16.2436 12.9253H16.1936L16.1937 12.9266L16.2436 12.9253ZM15.5809 13.5979V13.6479L15.5822 13.6478L15.5809 13.5979ZM15.5178 13.5979V13.5479H15.4678V13.5979H15.5178ZM14.7919 14.2977V14.2477H14.7919L14.7919 14.2977ZM3.17778 14.2984V14.3484H3.17783L3.17778 14.2984ZM2.4519 13.5985H2.5019V13.5485H2.4519V13.5985ZM5.35542 14.2963V14.2463H5.35538L5.35542 14.2963ZM6.0813 13.5964V13.5464H6.0313V13.5964H6.0813ZM6.80718 13.5964V13.6464H6.85718V13.5964H6.80718ZM6.80718 12.2514H6.85718V12.2014H6.80718V12.2514ZM3.05003 12.2514H3.00003V12.3014H3.05003V12.2514ZM3.05003 8.7691L3.00401 8.74953L3.00003 8.75891V8.7691H3.05003ZM3.07979 8.69912V8.64912H3.04672L3.03378 8.67955L3.07979 8.69912ZM6.80718 8.69912V8.74912H6.85718V8.69912H6.80718ZM6.80718 7.29948H6.85718V7.24948H6.80718V7.29948ZM3.71493 7.29948L3.6694 7.27882L3.63733 7.34948H3.71493V7.29948ZM5.0099 4.44632V4.39632H4.97769L4.96437 4.42566L5.0099 4.44632ZM6.80718 4.44632V4.49632H6.85718V4.44632H6.80718ZM6.80718 3.10057H6.85718V3.05057H6.80718V3.10057ZM4.9424 3.10057V3.05057L4.94192 3.05057L4.9424 3.10057ZM3.83906 3.81159L3.88459 3.83225L3.8848 3.83178L3.83906 3.81159ZM2.25591 7.29948V7.34948H2.28813L2.30144 7.32015L2.25591 7.29948ZM1.69626 7.29948V7.24947L1.69519 7.24949L1.69626 7.29948ZM1.00014 7.9993L1.05017 8.00026L1.05013 7.99828L1.00014 7.9993ZM1.69626 8.69912L1.69514 8.74912H1.69626V8.69912ZM1.72602 8.69912H1.77602V8.64912H1.72602V8.69912ZM1.72602 12.9253L1.77602 12.9266V12.9253H1.72602ZM2.3873 13.5985L2.38587 13.6485H2.3873V13.5985ZM8.20893 1.61978V14.3789H8.30893V1.61978H8.20893ZM8.98761 0.951216C8.58476 0.928625 8.23549 1.22393 8.20904 1.61642L8.30882 1.62314C8.33136 1.28864 8.63048 1.03135 8.98201 1.05106L8.98761 0.951216ZM9.76058 1.61642C9.73413 1.22393 9.38486 0.928625 8.98201 0.951216L8.98761 1.05106C9.33914 1.03135 9.63826 1.28864 9.6608 1.62314L9.76058 1.61642ZM9.76069 14.3789V1.61978H9.66069V14.3789H9.76069ZM8.98207 15.0488C9.3853 15.071 9.73454 14.775 9.76058 14.3822L9.6608 14.3756C9.6386 14.7104 9.33947 14.9683 8.98755 14.949L8.98207 15.0488ZM8.20904 14.3822C8.23508 14.775 8.58431 15.071 8.98755 15.0488L8.98207 14.949C8.63015 14.9683 8.33102 14.7104 8.30882 14.3756L8.20904 14.3822ZM11.8384 13.5986C11.8384 14.0144 12.1875 14.3484 12.6142 14.3484V14.2484C12.2392 14.2484 11.9384 13.9557 11.9384 13.5986H11.8384ZM11.1625 13.6486H11.8884V13.5486H11.1625V13.6486ZM11.1125 12.2514V13.5986H11.2125V12.2514H11.1125ZM14.9189 12.2014H11.1625V12.3014H14.9189V12.2014ZM14.8689 8.76632V12.2514H14.9689V8.76632H14.8689ZM14.8426 8.7163L14.8731 8.78629L14.9648 8.74635L14.9343 8.67636L14.8426 8.7163ZM11.1625 8.74633H14.8884V8.64633H11.1625V8.74633ZM11.1125 7.2967V8.69633H11.2125V7.2967H11.1125ZM14.2533 7.2467H11.1625V7.3467H14.2533V7.2467ZM12.9113 4.46704L14.2078 7.3174L14.2988 7.276L13.0024 4.42564L12.9113 4.46704ZM11.1625 4.49634H12.9569V4.39634H11.1625V4.49634ZM11.1125 3.10059V4.44634H11.2125V3.10059H11.1125ZM13.0251 3.05059H11.1625V3.15059H13.0251V3.05059ZM14.1734 3.79139C13.9766 3.34581 13.5257 3.05587 13.0256 3.05059L13.0246 3.15058C13.4871 3.15547 13.9016 3.42352 14.082 3.83181L14.1734 3.79139ZM15.7564 7.27883L14.1732 3.79094L14.0822 3.83227L15.6653 7.32016L15.7564 7.27883ZM16.2741 7.2495H15.7108V7.3495H16.2741V7.2495ZM17.05 7.99932C17.05 7.58349 16.7009 7.2495 16.2741 7.2495V7.3495C16.6491 7.3495 16.95 7.64214 16.95 7.99932H17.05ZM16.2741 8.74913C16.7009 8.74913 17.05 8.41514 17.05 7.99932H16.95C16.95 8.35649 16.6491 8.64913 16.2741 8.64913V8.74913ZM16.2436 8.74913H16.2741V8.64913H16.2436V8.74913ZM16.2936 12.9253V8.69913H16.1936V12.9253H16.2936ZM15.5822 13.6478C15.9834 13.6372 16.3033 13.3153 16.2936 12.9241L16.1937 12.9266C16.2019 13.2592 15.9291 13.5386 15.5796 13.5479L15.5822 13.6478ZM15.5178 13.6479H15.5809V13.5479H15.5178V13.6479ZM14.7919 14.3477C15.2187 14.3477 15.5678 14.0137 15.5678 13.5979H15.4678C15.4678 13.955 15.1669 14.2477 14.7919 14.2477V14.3477ZM12.6143 14.3484L14.7919 14.3477L14.7919 14.2477L12.6142 14.2484L12.6143 14.3484ZM3.17778 14.2484C2.80276 14.2484 2.5019 13.9557 2.5019 13.5985H2.4019C2.4019 14.0144 2.75101 14.3484 3.17778 14.3484V14.2484ZM5.35538 14.2463L3.17773 14.2484L3.17783 14.3484L5.35547 14.3463L5.35538 14.2463ZM6.0313 13.5964C6.0313 13.9536 5.73044 14.2463 5.35542 14.2463V14.3463C5.78219 14.3463 6.1313 14.0123 6.1313 13.5964H6.0313ZM6.80718 13.5464H6.0813V13.6464H6.80718V13.5464ZM6.75718 12.2514V13.5964H6.85718V12.2514H6.75718ZM3.05003 12.3014H6.80718V12.2014H3.05003V12.3014ZM3.00003 8.7691V12.2514H3.10003V8.7691H3.00003ZM3.03378 8.67955L3.00401 8.74953L3.09604 8.78867L3.1258 8.71868L3.03378 8.67955ZM6.80718 8.64912H3.07979V8.74912H6.80718V8.64912ZM6.75718 7.29948V8.69912H6.85718V7.29948H6.75718ZM3.71493 7.34948H6.80718V7.24948H3.71493V7.34948ZM4.96437 4.42566L3.6694 7.27882L3.76046 7.32015L5.05543 4.46699L4.96437 4.42566ZM6.80718 4.39632H5.0099V4.49632H6.80718V4.39632ZM6.75718 3.10057V4.44632H6.85718V3.10057H6.75718ZM4.9424 3.15057H6.80718V3.05057H4.9424V3.15057ZM3.8848 3.83178C4.06516 3.42316 4.48008 3.15502 4.94288 3.15057L4.94192 3.05057C4.44144 3.05538 3.99016 3.34543 3.79332 3.79139L3.8848 3.83178ZM2.30144 7.32015L3.88459 3.83225L3.79353 3.79092L2.21038 7.27881L2.30144 7.32015ZM1.69626 7.34948H2.25591V7.24948H1.69626V7.34948ZM1.05013 7.99828C1.04303 7.64919 1.33073 7.35733 1.69733 7.34947L1.69519 7.24949C1.27688 7.25846 0.941854 7.59265 0.95015 8.00032L1.05013 7.99828ZM1.69738 8.64913C1.33092 8.64091 1.0434 8.34925 1.05013 8.00026L0.950149 7.99833C0.942286 8.40581 1.27704 8.73973 1.69514 8.7491L1.69738 8.64913ZM1.72602 8.64912H1.69626V8.74912H1.72602V8.64912ZM1.77602 12.9253V8.69912H1.67602V12.9253H1.77602ZM2.38872 13.5486C2.03949 13.5386 1.76741 13.259 1.776 12.9266L1.67604 12.924C1.66593 13.3149 1.985 13.6371 2.38588 13.6485L2.38872 13.5486ZM2.4519 13.5485H2.3873V13.6485H2.4519V13.5485Z"
                fill="#6F7383"
              />
            </svg>
          </div>
          <div>
            <svg
              className="heart"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.68574 2.1679C8.51267 2.29346 8.3477 2.43458 8.19095 2.5894L8.0626 2.72088L8 2.78989L7.9374 2.72088L7.80905 2.5894C7.6523 2.43458 7.48733 2.29346 7.31426 2.1679C6.73288 1.74614 6.06008 1.5 5.3 1.5C2.58473 1.5 1 3.87655 1 6.304C1 8.67851 2.19139 10.7406 4.13701 12.4002C5.50533 13.5673 7.2954 14.5 8 14.5C8.705 14.5 10.495 13.5674 11.8633 12.4002C13.8088 10.7406 15 8.67852 15 6.304C15 3.87655 13.4153 1.5 10.7 1.5C9.93992 1.5 9.26711 1.74614 8.68574 2.1679ZM6.67538 3.71857C6.23895 3.2911 5.78989 3.1 5.3 3.1C3.75142 3.1 2.6 4.44771 2.6 6.304C2.6 8.08759 3.48098 9.73759 5.17536 11.1829C5.76665 11.6872 6.46051 12.1489 7.07374 12.4778C7.37967 12.6419 7.64224 12.7605 7.84224 12.8338C7.91231 12.8595 7.96436 12.8758 8.00009 12.886C8.03585 12.8758 8.08795 12.8595 8.1581 12.8338C8.35812 12.7605 8.62069 12.6419 8.92662 12.4778C9.53983 12.1489 10.2337 11.6873 10.825 11.1829C12.5191 9.73772 13.4 8.08768 13.4 6.304C13.4 4.44771 12.2486 3.1 10.7 3.1C10.2101 3.1 9.76105 3.29109 9.32462 3.71857L9.228 3.81755L8 5.17143L6.77199 3.81755L6.67538 3.71857Z"
                fill="#6F7383"
              />
            </svg>
          </div>
        </div>
        <div className="vip-view-date">
          <p>
            {product.prom_color == 1 ? (
              <svg
                width="41"
                height="20"
                viewBox="0 0 41 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="41" height="20" rx="10" fill="#FEC900" />
                <path
                  d="M9.54 6.86L11.13 11.88H11.15L12.76 6.86H14.38L12.01 14H10.24L7.92 6.86H9.54ZM16.5588 14H14.9888V6.86H16.5588V14ZM17.938 6.86H21.168C21.708 6.86 22.1614 6.96 22.528 7.16C22.8947 7.36 23.168 7.63333 23.348 7.98C23.5347 8.32667 23.628 8.71667 23.628 9.15C23.628 9.59 23.5347 9.98333 23.348 10.33C23.168 10.67 22.8947 10.94 22.528 11.14C22.1614 11.34 21.7114 11.44 21.178 11.44H19.508V14H17.938V6.86ZM19.508 10.22H20.758C21.218 10.22 21.558 10.1367 21.778 9.97C21.998 9.79667 22.108 9.52333 22.108 9.15C22.108 8.78333 21.998 8.51333 21.778 8.34C21.5647 8.16667 21.228 8.08 20.768 8.08H19.508V10.22ZM27.1812 12.01V10.94H29.1712V8.95H30.2412V10.94H32.2312V12.01H30.2412V14H29.1712V12.01H27.1812Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="32"
                height="20"
                viewBox="0 0 32 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="20" rx="10" fill="#4A6CFA" />
                <path
                  d="M9.54 6.86L11.13 11.88H11.15L12.76 6.86H14.38L12.01 14H10.24L7.92 6.86H9.54ZM16.5588 14H14.9888V6.86H16.5588V14ZM17.938 6.86H21.168C21.708 6.86 22.1614 6.96 22.528 7.16C22.8947 7.36 23.168 7.63333 23.348 7.98C23.5347 8.32667 23.628 8.71667 23.628 9.15C23.628 9.59 23.5347 9.98333 23.348 10.33C23.168 10.67 22.8947 10.94 22.528 11.14C22.1614 11.34 21.7114 11.44 21.178 11.44H19.508V14H17.938V6.86ZM19.508 10.22H20.758C21.218 10.22 21.558 10.1367 21.778 9.97C21.998 9.79667 22.108 9.52333 22.108 9.15C22.108 8.78333 21.998 8.51333 21.778 8.34C21.5647 8.16667 21.228 8.08 20.768 8.08H19.508V10.22Z"
                  fill="white"
                />
              </svg>
            )}
          </p>
          <div className="view-dot-date">
            <span>
              <div className="views">{product.views} ნახვა</div>
              <svg
                className="dot"
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="2" r="1.5" fill="#8C929B" />
              </svg>
              <span className="date">{timeSinceUpload}</span>
            </span>
          </div>
        </div>
        <div className="pricebox">
          {product.price_value !== 0 ? (
            <>
              <div className="price">
                {product.price_value !== 0
                  ? product.price_value.toLocaleString()
                  : product.price_value}
              </div>
              <svg
                className="Gel"
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="24" rx="12" fill="#E2E5EB" />
                <path
                  d="M16.9143 17V15.3223H13.2511C12.6258 15.3223 12.078 15.1699 11.6078 14.8651C11.1376 14.5603 10.7745 14.1306 10.5185 13.5762C10.2624 13.0218 10.1344 12.3797 10.1344 11.6501C10.1344 10.8581 10.2489 10.2004 10.4778 9.67719C10.7068 9.15396 11.0773 8.74834 11.5894 8.46032V11.8085H12.483V8.19391C12.6307 8.16511 12.7907 8.15071 12.9631 8.15071C13.1305 8.15071 13.2979 8.16511 13.4653 8.19391V11.8085H14.3589V8.46032C14.8858 8.74354 15.2637 9.15396 15.4926 9.69159C15.7216 10.2292 15.836 10.9349 15.836 11.8085H18C18 10.9733 17.8535 10.204 17.5606 9.50078C17.2676 8.79754 16.8466 8.20231 16.2976 7.71508C15.7486 7.22785 15.1024 6.89063 14.3589 6.70342V6H13.4653V6.54502L13.229 6.53781C13.1748 6.53301 13.096 6.53061 12.9926 6.53061C12.7612 6.53061 12.5913 6.53541 12.483 6.54502V6H11.5894V6.70342C10.8705 6.89063 10.2403 7.21585 9.69867 7.67908C9.15707 8.1423 8.73855 8.69554 8.44313 9.33877C8.14771 9.98201 8 10.6588 8 11.3693C8 11.9165 8.07632 12.4493 8.22895 12.9678C8.38159 13.4862 
          8.60561 13.9506 8.90103 14.3611C9.19646 14.7715 9.5485 15.0919 9.95716 15.3223V15.3799H8.54653V17H16.9143Z"
                  fill="#272A37"
                />
              </svg>
            </>
          ) : (
            <span className="shetanxmebit">ფასი&nbsp;შეთანხმებით</span>
          )}
        </div>
        <div className="ganbajeba-drosha-qveyana">
          {product.customs_passed === false ? (
            <div className="ganbajeba-ganbajebisfasi-false">
              <span className="ganbajeba-false">
                განბაჟება &nbsp;
                <span className="ganbajebisfasi-false">
                  {product.price !== null
                    ? product.price.toLocaleString()
                    : product.price}
                  ლ
                </span>
              </span>
            </div>
          ) : (
            <div className="ganbajeba-ganbajebischeck-true">
              <svg
                className="checked"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.40305 7.48254C5.16363 7.48219 4.9341 7.58333 4.76597 7.76326C4.41923 8.12087 4.41037 8.70665 4.74612 9.07576L6.64248 10.7392C6.80254 10.9076 7.01979 11.0016 7.24583 11C7.48591 10.9992 7.71597 10.8983 7.88589 10.7193L11.2311 6.57333C11.4029 6.39612 11.4998 6.15334 11.5 5.8998C11.5013 5.66091 11.4121 5.43139 11.2521 5.26238C11.0922 5.09336 10.8749 4.99889 10.6486 5.00001C10.4081 5.00063 10.178 5.10287 10.0095 5.28388L7.29445 8.76151L6.00441 7.74231C5.84459 7.57473 5.62832 7.48093 5.40305 7.48149V7.48254Z"
                  fill="#1EB676"
                />
              </svg>

              <span className="ganbajeba-true">განბაჟებული &nbsp;</span>
            </div>
          )}

          <div className="flag">
            {product.location_id === 2 ||
            product.location_id === 4 ||
            product.location_id === 13 ? (
              <svg
                className="drosha-geo"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4982 8.00007C15.4982 12.1422 12.1407 15.4999 7.99912 15.4999C3.85751 15.4999 0.5 12.1422 0.5 8.00007C0.5 3.85799 3.85751 0.500244 7.99912 0.500244C12.1407 0.500244 15.4982 3.85799 15.4982 8.00007Z"
                  fill="white"
                  stroke="#E9E9F0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.9304 6.95557H9.04433V0.0677221C8.35172 -0.022574 7.65032 -0.022574 6.95771 0.0677221V6.95557H0.0704627C-0.0198255 7.64825 -0.0198255 8.34971 0.0704627 9.04238H6.95771V15.9302C7.65032 16.0205 8.35172 16.0205 9.04433 15.9302V9.04238H15.9316C16.0219 8.34971 16.0219 7.64825 15.9316 6.95557H15.9304ZM4.87147 3.82564V2.78223H3.82816V3.82564H2.78484V4.86904H3.82816V5.91244H4.87147V4.86904H5.91478V3.82564H4.87147ZM12.1736 2.78223V3.82564H13.2214V4.86904H12.1781V5.91244H11.1348V4.86904H10.0915V3.82564H11.1348V2.78223H12.1736ZM4.87147 11.1324V10.089H3.82816V11.1324H2.78484V12.1758H3.82816V13.2192H4.87147V12.1758H5.91478V11.1324H4.87147ZM12.1736 10.089V11.1324H13.2214V12.1758H12.1781V13.2192H11.1348V12.1758H10.0915V11.1324H11.1348V10.089H12.1736Z"
                  fill="#FF3B30"
                />
              </svg>
            ) : product.location_id === 15 ? (
              <svg
                className="drosha-usa"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_6473_1925"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <path
                    d="M15.4982 8.00007C15.4982 12.1422 12.1407 15.4999 7.99912 15.4999C3.85751 15.4999 0.5 12.1422 0.5 8.00007C0.5 3.85799 3.85751 0.500244 7.99912 0.500244C12.1407 0.500244 15.4982 3.85799 15.4982 8.00007Z"
                    fill="white"
                    stroke="#E9E9F0"
                  />
                </mask>
                <g mask="url(#mask0_6473_1925)">
                  <path
                    d="M32.5332 -0.71701H-7.99661V0.924323H32.5332V-0.71701Z"
                    fill="#BD3D44"
                  />
                  <path
                    d="M32.5332 2.56433H-7.99661V4.20566H32.5332V2.56433Z"
                    fill="#BD3D44"
                  />
                  <path
                    d="M32.5332 5.84702H-7.99661V7.48835H32.5332V5.84702Z"
                    fill="#BD3D44"
                  />
                  <path
                    d="M32.5332 9.12833H-7.99661V10.7697H32.5332V9.12833Z"
                    fill="#BD3D44"
                  />
                  <path
                    d="M32.5332 12.411H-7.99661V14.0523H32.5332V12.411Z"
                    fill="#BD3D44"
                  />
                  <path
                    d="M32.5332 15.6924H-7.99661V17.3337H32.5332V15.6924Z"
                    fill="#BD3D44"
                  />
                  <path
                    d="M32.5332 0.924316H-7.99661V2.56565H32.5332V0.924316Z"
                    fill="white"
                  />
                  <path
                    d="M32.5332 4.20566H-7.99661V5.84699H32.5332V4.20566Z"
                    fill="white"
                  />
                  <path
                    d="M32.5332 7.48834H-7.99661V9.12967H32.5332V7.48834Z"
                    fill="white"
                  />
                  <path
                    d="M32.5332 10.7697H-7.99661V12.411H32.5332V10.7697Z"
                    fill="white"
                  />
                  <path
                    d="M32.5332 14.0523H-7.99661V15.6937H32.5332V14.0523Z"
                    fill="white"
                  />
                  <path
                    d="M8.21529 -3.99966H-7.99661V7.487H8.21529V-3.99966Z"
                    fill="#192F5D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.10806 -0.0610352L0.25606 0.393632H0.733393L0.346727 0.673632L0.494727 1.1283L0.10806 0.848298L-0.278606 1.1283L-0.130606 0.673632L-0.517273 0.393632H-0.0399399L0.10806 -0.0610352Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.80914 -0.0610352L2.95714 0.393632H3.43447L3.04781 0.673632L3.19581 1.1283L2.80914 0.848298L2.42247 1.1283L2.57047 0.673632L2.18381 0.393632H2.66114L2.80914 -0.0610352Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.51156 -0.0610352L5.65956 0.393632H6.1369L5.75023 0.673632L5.89823 1.1283L5.51156 0.848298L5.1249 1.1283L5.2729 0.673632L4.88623 0.393632H5.36356L5.51156 -0.0610352Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.45859 1.08698L1.60659 1.54164H2.08392L1.69725 1.82164L1.84525 2.27631L1.45859 1.99631L1.07192 2.27631L1.21992 1.82164L0.833252 1.54164H1.31059L1.45859 1.08698Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.16101 1.08698L4.30901 1.54164H4.78634L4.39967 1.82164L4.54767 2.27631L4.16101 1.99631L3.77434 2.27631L3.92234 1.82164L3.53568 1.54164H4.01301L4.16101 1.08698Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.86343 1.08698L7.01143 1.54164H7.48876L7.1021 1.82164L7.2501 2.27631L6.86343 1.99631L6.47676 2.27631L6.62476 1.82164L6.2381 1.54164H6.71543L6.86343 1.08698Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.10806 2.2363L0.25606 2.69097H0.733393L0.346727 2.97097L0.494727 3.42563L0.10806 3.14563L-0.278606 3.42563L-0.130606 2.97097L-0.517273 2.69097H-0.0399399L0.10806 2.2363Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.80914 2.2363L2.95714 2.69097H3.43447L3.04781 2.97097L3.19581 3.42563L2.80914 3.14563L2.42247 3.42563L2.57047 2.97097L2.18381 2.69097H2.66114L2.80914 2.2363Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.51156 2.2363L5.65956 2.69097H6.1369L5.75023 2.97097L5.89823 3.42563L5.51156 3.14563L5.1249 3.42563L5.2729 2.97097L4.88623 2.69097H5.36356L5.51156 2.2363Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.45859 3.38431L1.60659 3.83898H2.08392L1.69725 4.11898L1.84525 4.57364L1.45859 4.29364L1.07192 4.57364L1.21992 4.11898L0.833252 3.83898H1.31059L1.45859 3.38431Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.16101 3.38431L4.30901 3.83898H4.78634L4.39967 4.11898L4.54767 4.57364L4.16101 4.29364L3.77434 4.57364L3.92234 4.11898L3.53568 3.83898H4.01301L4.16101 3.38431Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.86343 3.38431L7.01143 3.83898H7.48876L7.1021 4.11898L7.2501 4.57364L6.86343 4.29364L6.47676 4.57364L6.62476 4.11898L6.2381 3.83898H6.71543L6.86343 3.38431Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.10806 4.53363L0.25606 4.9883H0.733393L0.346727 5.2683L0.494727 5.72296L0.10806 5.44296L-0.278606 5.72296L-0.130606 5.2683L-0.517273 4.9883H-0.0399399L0.10806 4.53363Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.80914 4.53363L2.95714 4.9883H3.43447L3.04781 5.2683L3.19581 5.72296L2.80914 5.44296L2.42247 5.72296L2.57047 5.2683L2.18381 4.9883H2.66114L2.80914 4.53363Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.51156 4.53363L5.65956 4.9883H6.1369L5.75023 5.2683L5.89823 5.72296L5.51156 5.44296L5.1249 5.72296L5.2729 5.2683L4.88623 4.9883H5.36356L5.51156 4.53363Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.45859 5.68164L1.60659 6.13631H2.08392L1.69725 6.41631L1.84525 6.87097L1.45859 6.59097L1.07192 6.87097L1.21992 6.41631L0.833252 6.13631H1.31059L1.45859 5.68164Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.16101 5.68164L4.30901 6.13631H4.78634L4.39967 6.41631L4.54767 6.87097L4.16101 6.59097L3.77434 6.87097L3.92234 6.41631L3.53568 6.13631H4.01301L4.16101 5.68164Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.86343 5.68164L7.01143 6.13631H7.48876L7.1021 6.41631L7.2501 6.87097L6.86343 6.59097L6.47676 6.87097L6.62476 6.41631L6.2381 6.13631H6.71543L6.86343 5.68164Z"
                    fill="white"
                  />
                </g>
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="location">
          {product.location_id === 2
            ? "თბილისი"
            : product.location_id === 15
            ? "აშშ"
            : product.location_id === 4
            ? "რუსთავი"
            : product.location_id == 13
            ? "საქართველო"
            : "სხვა"}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
