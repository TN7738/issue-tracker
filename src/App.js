import "./App.css";
import Homepage from "./components/Homepage";
import IssueList from "./components/IssueList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import IssuePage from "./components/IssuePage";
import Body from "./components/Body";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/issuelist",
                element: <IssueList />,
            },
            {
                path: "/issuelist/:issueid",
                element: <IssuePage />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </ApolloProvider>
    );
}

export default App;
