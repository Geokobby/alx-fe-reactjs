import PostsComponent from "./components/PostsComponent";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <div>
      
      <h1 className="text-3xl font-bold text-center mt-6">React Query Demo</h1>
      <PostsComponent />

      <QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
    </div>
  );
}

export default App;
