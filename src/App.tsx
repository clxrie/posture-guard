import DistanceGauge from "./components/dashboard/DistanceGauge"
import SessionTimer from "./components/dashboard/SessionTimer"
import StatusCard from "./components/dashboard/StatusCard"
import PostureScore from "./components/dashboard/PostureScore";
import { useRealtimeDistance } from "./hooks/useRealtimeDistance";

function App() {
  const distance = useRealtimeDistance();

  return (
    <div className="text-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl text-orange-500 font-bold mb-6" >PostureGuard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <DistanceGauge distance={distance} />
        <StatusCard distance={distance} />
        <SessionTimer />
        <PostureScore score={40} />
      </div>
    </div>
  );
}

export default App
