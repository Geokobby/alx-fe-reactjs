const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div style={styles.container}>
      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={styles.avatar}
          />
          <h3>{user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "8px",
  },
  link: {
    color: "#0366d6",
    textDecoration: "none",
  },
};

export default UserList;
