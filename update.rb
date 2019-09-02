updates = File.read("updates")

paths = `find data -name '*.md'`.split("\n")

paths.each do |path|
  input = File.read(path)

  updates.split("\n").each do |line|
    split = line.split(" ")
    old_id = split[0]
    new_id = split[1]
    input = input.gsub(old_id, new_id)
  end

  File.write(path, input)
end
