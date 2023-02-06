const students = [
  {
    name: 'João Pedro',
    markOne: 7.5,
    markTwo: 7.0
  },
  {
    name: 'Lúcia',
    markOne: 9.0,
    markTwo: 10.0
  },
  {
    name: 'Ricardo',
    markOne: 10.0,
    markTwo: 9.0
  },
  {
    name: 'Leticia',
    markOne: 3.5,
    markTwo: 4.0
  },
  {
    name: 'Yuri Alberto',
    markOne: 5.0,
    markTwo: 7.0
  },
  {
    name: 'Roger Guedes',
    markOne: 4.0,
    markTwo: 2.0
  }
]

function average(markOne, markTwo) {
  return (markOne + markTwo) / 2
}

for (const student of students) {
  const studentAverage = average(student.markOne, student.markTwo)

  if (studentAverage >= 7) {
    alert(`
      A media do(a) aluno(a) ${student.name} é: ${studentAverage}
      Parabéns, ${student.name}! Você foi aprovado no concurso!
    `)
  } else {
    alert(`
      A media do(a) aluno(a) ${student.name} é: ${studentAverage}
      Não foi dessa vez, ${student.name}! Tente novamente!
    `)
  }
}
