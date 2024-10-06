import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {PersistGate} from "redux-persist/integration/react"
import {QueryClient, QueryClientProvider} from "react-query"
import rootReducer from "./store/rootReducer"
import PrivateRoute from "./components/PrivateRoute"
import Header from "./components/Header"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

const persistConfig = {
	key: "root",
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
})

const persistor = persistStore(store)

const queryClient = new QueryClient()

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<Router>
						<div className="min-h-screen bg-gray-100">
							<Header />
							<Routes>
								<Route path="/login" element={<Login />} />
								<Route element={<PrivateRoute />}>
									<Route path="/dashboard" element={<Dashboard />} />
								</Route>
								<Route path="*" element={<Login />} />
							</Routes>
						</div>
					</Router>
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
