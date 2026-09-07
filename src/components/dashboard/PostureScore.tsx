function PostureScore({score} :  { score:number }){

    function getGrade(score:number){
        if(score >= 90) return{grade: "A+", color: "text-green-500"};
        else if(score >= 80) return{grade: "A", color: "text-green-500"};
        else if(score >= 70) return{grade: "B", color: "text-yellow-500"};
        else if(score >= 60) return{grade: "C", color: "text-orange-500"};
        else{
            return { grade: "F", color: "text-red-500" };
        }
    }

    const {grade, color} = getGrade(score);

    return (
    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm">
      <p className="text-sm text-gray-500">Posture Score</p>
      <h2 className={`text-5xl font-bold mt-2 ${color}`}>{score}%</h2>
      <p className={`text-2xl font-bold mt-1 ${color}`}>{grade}</p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-xs text-gray-400 mt-2">
        Based on current session
      </p>
    </div>
  );
}
export default PostureScore