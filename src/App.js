import "./App.css";
import Homepage from "./components/Homepage";
import IssueList from "./components/IssueList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import IssuePage from "./components/IssuePage";
import Body from "./components/Body";
import IssueAdd from "./components/IssueAdd";
import IssueEdit from "./components/IssueEdit";
import "bootstrap/dist/css/bootstrap.min.css";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                issues: {
                    merge: (existing, incoming) => incoming,
                },
            },
        },
    },
});

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache,
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
            {
                path: "/issueadd",
                element: <IssueAdd />,
            },
            {
                path: "/issueedit/:issueid",
                element: <IssueEdit />,
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
