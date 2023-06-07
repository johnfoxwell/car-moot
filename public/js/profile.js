const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#car-name').value.trim();
    const transmission = document.querySelector('#transmission').value.trim();
    const description = document.querySelector('#car-desc').value.trim();
    const drivetrain = document.querySelector('#drivetrain').value.trim();
  
    if (name && transmission && description && drivetrain) {
      const response = await fetch(`/api/cars`, {
        method: 'POST',
        body: JSON.stringify({ name, transmission, description, drivetrain }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create car');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/car/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete car');
      }
    }
  };
  
  document
    .querySelector('.new-car-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.car-list')
    .addEventListener('click', delButtonHandler);
  