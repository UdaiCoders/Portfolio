const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");
const { default: AuthForm } = require("../Screen/Auth/AuthForm");
const { default: BaseLayout } = require("../Layout/BaseLayout");
const { default: Dashboard } = require("../Screen/Dashboard");

const routes = createBrowserRouter([
{
    path : "/",
    element : <App />,
    children : [
        {
            path : "/",
            element : <AuthForm />
        },
        {
            path : "/dashboard",
            element : <BaseLayout><Dashboard /></BaseLayout>
        }
    ]
}
])

export default routes;