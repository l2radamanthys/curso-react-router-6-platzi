import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { ProfilePage } from "./pages/ProfilePage";
import { BlogPost } from "./pages/BlogPost";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";
import { AuthProvider } from "./auth";
import { BlogPostAdd } from "./pages/BlogPostAdd";
import { UnauthorizedPage } from "./pages/UnauthorizedPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AddProfilePage } from "./pages/AddProfilePage";
import { AuthRequired } from "./components/AuthRequired";

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
              <Route
                path="edit/:slug"
                element={
                  <AuthRequired>
                    <BlogPostAdd />
                  </AuthRequired>
                }
              />
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
            <Route path="/register" element={<AddProfilePage />} />
            <Route
              path="/profile/edit/:username"
              element={<AddProfilePage />}
            />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/logout"
              element={
                <AuthRequired>
                  <LogoutPage />
                </AuthRequired>
              }
            />
            <Route path="unauthorized" element={<UnauthorizedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
