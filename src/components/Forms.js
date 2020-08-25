import React from 'react';

function NameForm() {
  return (
    <form>
      <p>A simple form</p>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export function Forms() {
  return (
    <div>
      <h2>Forms</h2>

      <NameForm />
    </div>
  );
}
