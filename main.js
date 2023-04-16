function add_text(){
  var title = document.getElementsByClassName("title")[0];
  title.innerHTML = "Andy's Revenge";
  title.style.color = "red";

  var paragraph = document.getElementsByClassName("poem")[0];
  paragraph.innerHTML = "There was a person named Emily who moved into an old Victorian house in the countryside. The house had a long history of mysterious deaths and strange occurrences, but Emily didn't believe in ghosts or spirits. One night, Emily was awakened by a strange noise coming from the hallway. She got out of bed and went to investigate, but she found nothing. As she turned to go back to bed, she saw a figure standing at the end of the hallway. The figure was shrouded in darkness, but Emily could feel its cold gaze on her. Emily tried to scream, but no sound came out. The figure began to move towards her, slowly and menacingly. Emily tried to run, but she found herself rooted to the spot. As the figure approached, Emily could see that it was a man named Andy, who had lived in the house before her. Andy had a reputation for being reclusive and strange, and many of the locals believed that he had practiced dark magic in the house. Andy reached out with his bony fingers and touched Emily's face. Emily felt a chill run through her body, and she knew that she was in grave danger. Andy whispered in Emily's ear, telling her that she would never leave the house alive. Emily tried to fight back, but Andy was too strong. She was trapped in the house, forever doomed to wander its halls as another victim of his malevolent power. From that night on, Emily was never seen again. The house remained empty, a dark and foreboding presence in the countryside, and the locals whispered that it was haunted by the ghost of a woman who had met a terrible fate at the hands of Andy.";
  paragraph.style.color = "white";

  document.body.style.backgroundColor = "black";

  var img = document.getElementById("andypic");
  img.style.height = "100vh";
  img.style.width = "30vw";
}