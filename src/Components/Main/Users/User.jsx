import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const User = () => {
  const { Users } = useContext(AuthContext);

  return (
    <div className="min-h-screen my-16 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <h3 className="text-center font-bold">
        Create Total Account : {Users.length}
      </h3>

      <div>
        <div className="overflow-y-auto my-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Account Create Time</th>
                <th>Last Login Time</th>
              </tr>
            </thead>
            {Users.map((user, index) => (
              <tbody key={user._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.userCreateTime}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
