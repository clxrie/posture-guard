function DistanceGauge({distance} : {distance : number}) {
    
    function getStatusStyle(cameraDistance : number){
        /* can't do text-${color}-500 dynamically in Tailwind.
        Tailwind needs to see the full class name at build time.
        So instead of using function to return "green"/"yellow"/"red", return the full Tailwind classes*/
        if (cameraDistance > 40){
            return {
                text: "text-green-500",
                bg: "bg-green-100",
                label: "Good posture"
            };
        }
        else if(cameraDistance >25){
            return {
                text: "text-yellow-500",
                bg: "bg-yellow-100",
                label: "Getting Close"
            };
        }
        else{
            return {
                text: "text-red-500",
                bg: "bg-red-100",
                label: "Too close"
            };
        }
    }
    
    const status = getStatusStyle(distance);

    return(
            <div className={`flex flex-col items-center p-8 rounded-2xl ${status.bg}`}>
            <p className="text-sm text-gray-500">DISTANCE</p>
            <h2 className={`text-6xl font-bold ${status.text}`}>
                {distance}
                <span className="text-2xl ml-1">cm</span>
            </h2>
            <p className={`text-lg mt-2 font-medium ${status.text}`}>
                {status.label}
            </p>
            </div>
        );
}
export default DistanceGauge