export const getUserPets = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets`);
    const resJson = await res.json();
    return await resJson;
  } catch (error) {
    throw error;
  }
};

export const getUserPetById = async (id) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`);
    const resJson = await res.json();
    return await resJson;
  } catch (error) {
    throw error;
  }
};

export const getUserPetByUser = async (userId) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${userId}`,
      {
        credentials: 'include',
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const postUserPet = async ({ petId, userId, name }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ petId, userId, name }),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const updateUserPet = async (id) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`, {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const feedUserPet = async (id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${id}/hunger`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    );
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log('ERROR:', error);
  }
};
export const cleanUserPet = async (id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${id}/clean`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    );
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log('ERROR:', error);
  }
};
export const playUserPet = async (id) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/userpets/${id}/play`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    );
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log('ERROR:', error);
  }
};

export const deleteUserPet = async ({ petId, userId, name }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/userpets/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ petId, userId, name }),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
