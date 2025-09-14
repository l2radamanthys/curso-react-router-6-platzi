import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { BlogPost } from "./BlogPost";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { AuthProvider, AuthRequired } from "./auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route
              path="/profile"
              element={
                <AuthRequired>
                  <ProfilePage />
                </AuthRequired>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRequired>
                  <LogoutPage />
                </AuthRequired>
              }
            />
            <Route path="*" element={<p>Not Found!</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
