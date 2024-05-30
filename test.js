var m_file = java.io.File("README.md");
var m_reader = java.io.FileReader(m_file);
var m_buffer = java.io.BufferedReader(m_reader);
var found = 0;
while ((line = m_buffer.readLine()) != null) {
    found += 1
}
java.lang.System.out.println(found == 164);