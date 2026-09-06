function StatusCard({distance} : {distance: number}){

    function distanceMessage(cameraDistance : number){
        if(cameraDistance > 40){
            return{
                text: "text-green-500",
                bg: "bg-green-300",
                label: "You've maintained good posture for 15 minutes."
            };
        }
        else if(cameraDistance > 25){
            return{
                text: "text-yellow-500",
                bg: "bg-yellow-300",
                label: "You are being too close to the screen from the past 4 minutes"
            };
        }
        else{
            return{
                text: "text-red-500",
                bg: "bg-red-300",
                label: "You've been too close for 45 seconds."
            };
        }
    }

    const dist = distanceMessage(distance);
    return(
        <div className={`flex flex-col items-center p-8 rounded-2xl ${dist.bg}`}>
            <p className={`text-lg mt-2 font-medium ${dist.text}`}>{dist.label}</p>
        </div>
    );
}
export default StatusCard