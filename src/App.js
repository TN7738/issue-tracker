import "./App.css";
import IssueList from "./components/IssueList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <IssueList />
            </div>
        </ApolloProvider>
    );
}

export default App;
