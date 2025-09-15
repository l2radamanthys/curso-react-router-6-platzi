import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { ProfilePage } from "./pages/ProfilePage";
import { BlogPost } from "./pages/BlogPost";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";
import { AuthProvider, AuthRequired } from "./auth";
import { BlogPostAdd } from "./pages/BlogPostAdd";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route
                path="add"
                element={
                  <AuthRequired>
                    <BlogPostAdd />
                  </AuthRequired>
                }
              />
              <Route path="edit/:slug" element={<BlogPostAdd />} />
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
