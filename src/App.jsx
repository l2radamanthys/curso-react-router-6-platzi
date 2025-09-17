import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { ProfilePage } from "./pages/ProfilePage";
import { BlogPost } from "./pages/BlogPost";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";
import { AuthProvider, useAuth } from "./auth";
import { BlogPostAdd } from "./pages/BlogPostAdd";
import { UnauthorizedPage } from "./pages/UnauthorizedPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AddProfilePage } from "./pages/AddProfilePage";
import { AuthRequired } from "./components/AuthRequired";
import { StorageListener } from "./StorageListener";
import { useBlogData } from "./hooks/useBlogData";

function App() {
  const {
    blogData,
    addPost,
    deletePost,
    updatePost,
    blogDataStorageKey,
    sincronizeBlog,
  } = useBlogData();
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage blogData={blogData} />}>
              <Route
                path="add"
                element={
                  <AuthRequired>
                    <BlogPostAdd blogData={blogData} addPost={addPost} />
                  </AuthRequired>
                }
              />
              <Route
                path="edit/:slug"
                element={
                  <AuthRequired>
                    <BlogPostAdd blogData={blogData} addPost={addPost} />
                  </AuthRequired>
                }
              />
              <Route
                path=":slug"
                element={
                  <BlogPost blogData={blogData} deletePost={deletePost} />
                }
              />
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

      <StorageListener
        sincronizeBlog={sincronizeBlog}
        blogDataStorageKey={blogDataStorageKey}
      />
    </>
  );
}

export default App;
