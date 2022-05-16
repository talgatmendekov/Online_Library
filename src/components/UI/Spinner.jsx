export default function Loader() {
   return (
      <div className="d-flex justify-content-center">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80px"
            height="30px"
            viewBox="0 0 100 20"
            preserveAspectRatio="xMidYMid"
         >
            <g transform="translate(20 10)">
               <circle cx="0" cy="0" r="6" fill="#37639d">
                  <animateTransform
                     attributeName="transform"
                     type="scale"
                     begin="-0.375s"
                     calcMode="spline"
                     keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                     values="0;1;0"
                     keyTimes="0;0.5;1"
                     dur="1s"
                     repeatCount="indefinite"
                  />
               </circle>
            </g>
            <g transform="translate(40 10)">
               <circle cx="0" cy="0" r="6" fill="#0e9496">
                  <animateTransform
                     attributeName="transform"
                     type="scale"
                     begin="-0.25s"
                     calcMode="spline"
                     keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                     values="0;1;0"
                     keyTimes="0;0.5;1"
                     dur="1s"
                     repeatCount="indefinite"
                  />
               </circle>
            </g>
            <g transform="translate(60 10)">
               <circle cx="0" cy="0" r="6" fill="#d7f2d8">
                  <animateTransform
                     attributeName="transform"
                     type="scale"
                     begin="-0.125s"
                     calcMode="spline"
                     keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                     values="0;1;0"
                     keyTimes="0;0.5;1"
                     dur="1s"
                     repeatCount="indefinite"
                  />
               </circle>
            </g>
            <g transform="translate(80 10)">
               <circle cx="0" cy="0" r="6" fill="#f9fdc1">
                  <animateTransform
                     attributeName="transform"
                     type="scale"
                     begin="0s"
                     calcMode="spline"
                     keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                     values="0;1;0"
                     keyTimes="0;0.5;1"
                     dur="1s"
                     repeatCount="indefinite"
                  />
               </circle>
            </g>
         </svg>
      </div>
   )
}
